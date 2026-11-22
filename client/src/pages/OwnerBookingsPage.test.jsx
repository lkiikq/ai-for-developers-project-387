import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import {
  beforeEach, describe, expect, it, vi,
} from 'vitest';
import App from '../App.jsx';
import { listBookings } from '../api/index.js';

// SDK замокан: реальный бэкенд из фронтенд-тестов не поднимаем (см. README,
// «Приёмочная матрица тестов»)
vi.mock('../api/index.js', () => ({
  listEventTypes: vi.fn(),
  listBookings: vi.fn(),
  createEventType: vi.fn(),
  createBooking: vi.fn(),
  getEventTypeSlots: vi.fn(),
  health: vi.fn(),
}));

const renderPage = () => render(
  <MemoryRouter initialEntries={['/owner/bookings']}>
    <App />
  </MemoryRouter>,
);

const bookings = [
  {
    id: 'b-2',
    eventTypeId: 'type-1',
    eventTypeName: 'Созвон на 30 минут',
    date: '2026-04-02',
    startTime: '11:00',
    endTime: '11:30',
    guestName: 'Иван Петров',
    guestEmail: 'ivan@example.com',
    createdAt: '2026-03-20T09:15:00.000Z',
  },
  {
    id: 'b-1',
    eventTypeId: 'type-1',
    eventTypeName: 'Созвон на 30 минут',
    date: '2026-04-01',
    startTime: '10:00',
    endTime: '10:30',
    guestName: 'Анна Смирнова',
    guestEmail: 'anna@example.com',
    createdAt: '2026-03-19T14:05:00.000Z',
  },
];

const bookingWithMissingType = {
  id: 'b-missing',
  eventTypeId: 'type-deleted',
  eventTypeName: null,
  date: '2026-04-03',
  startTime: '12:00',
  endTime: '12:30',
  guestName: 'Олег Орлов',
  guestEmail: 'oleg@example.com',
  createdAt: '2026-03-21T10:00:00.000Z',
};

beforeEach(() => {
  vi.mocked(listBookings).mockReset();
});

describe('Предстоящие события (/owner/bookings)', () => {
  it('рендерит карточки броней, ближайшие выше', async () => {
    vi.mocked(listBookings).mockResolvedValue({ data: bookings });
    renderPage();

    expect(await screen.findByRole('heading', { name: 'Предстоящие события' }))
      .toBeInTheDocument();
    const names = (await screen.findAllByText(/(Иван Петров|Анна Смирнова)/))
      .map((node) => node.textContent);
    expect(names).toEqual(['Анна Смирнова', 'Иван Петров']);
    expect(screen.getByText('ivan@example.com')).toBeInTheDocument();
    expect(screen.getByText('Слот: 2026-04-02-11:00')).toBeInTheDocument();
    expect(screen.getByText('Создано: 20.03.2026, 09:15')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Типы встреч' }))
      .toHaveAttribute('href', '/owner/event-types');
  });

  it('рендерит название встречи между email и «Слот» (основной сценарий)', async () => {
    vi.mocked(listBookings).mockResolvedValue({ data: bookings });
    renderPage();

    const card = (await screen.findByText('ivan@example.com')).closest('li');
    const text = card.textContent;
    expect(within(card).getByText('Созвон на 30 минут')).toBeInTheDocument();
    expect(text.indexOf('ivan@example.com')).toBeLessThan(
      text.indexOf('Созвон на 30 минут'),
    );
    expect(text.indexOf('Созвон на 30 минут')).toBeLessThan(
      text.indexOf('Слот: 2026-04-02-11:00'),
    );
  });

  it('при eventTypeName: null не рендерит строку названия, остальные строки прежние (негативный сценарий)', async () => {
    vi.mocked(listBookings).mockResolvedValue({ data: [bookingWithMissingType] });
    renderPage();

    const card = (await screen.findByText('oleg@example.com')).closest('li');
    expect(card.querySelectorAll('p')).toHaveLength(4);
    expect(within(card).getByText('Олег Орлов')).toBeInTheDocument();
    expect(within(card).getByText('Слот: 2026-04-03-12:00')).toBeInTheDocument();
    expect(within(card).getByText('Создано: 21.03.2026, 10:00')).toBeInTheDocument();
  });

  it('показывает empty-текст «Предстоящих событий нет.»', async () => {
    vi.mocked(listBookings).mockResolvedValue({ data: [] });
    renderPage();

    expect(await screen.findByText('Предстоящих событий нет.')).toBeInTheDocument();
  });

  it('показывает error и кнопку «Повторить»', async () => {
    const user = userEvent.setup();
    vi.mocked(listBookings)
      .mockRejectedValueOnce(new Error('network'))
      .mockResolvedValue({ data: [] });
    renderPage();

    expect(
      await screen.findByText('Не удалось загрузить данные. Проверьте соединение и попробуйте снова.'),
    ).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: 'Повторить' }));

    expect(await screen.findByText('Предстоящих событий нет.')).toBeInTheDocument();
  });

  it('показывает индикатор «Загрузка…» во время запроса', () => {
    vi.mocked(listBookings).mockReturnValue(new Promise(() => {}));
    renderPage();

    expect(screen.getByText('Загрузка…')).toBeInTheDocument();
  });
});
