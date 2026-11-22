# Changelog

## [1.1.0](https://github.com/lkiikq/ai-for-developers-project-387/compare/v1.0.0...v1.1.0) (2026-11-22)


### Features

* eventTypeName в ответах GET и POST /api/bookings ([#15](https://github.com/lkiikq/ai-for-developers-project-387/issues/15)) ([97ae669](https://github.com/lkiikq/ai-for-developers-project-387/commit/97ae669c2c03ee9ed8b327a1061f0b014e74b5cf))
* название встречи в карточке предстоящих событий ([#16](https://github.com/lkiikq/ai-for-developers-project-387/issues/16)) ([6c1e897](https://github.com/lkiikq/ai-for-developers-project-387/commit/6c1e8973d43017220af6591e47516805c8c614d7))
* название встречи в предстоящих событиях ([#14](https://github.com/lkiikq/ai-for-developers-project-387/issues/14), [#15](https://github.com/lkiikq/ai-for-developers-project-387/issues/15), [#16](https://github.com/lkiikq/ai-for-developers-project-387/issues/16), [#17](https://github.com/lkiikq/ai-for-developers-project-387/issues/17)) ([56491d1](https://github.com/lkiikq/ai-for-developers-project-387/commit/56491d1d2b5104bc9cde7d942396eb91239de60f))
* поле eventTypeName в контракте брони ([#14](https://github.com/lkiikq/ai-for-developers-project-387/issues/14)) ([c79d96f](https://github.com/lkiikq/ai-for-developers-project-387/commit/c79d96f30e1c3b504e495ed99d7fd2a205aedb95))


### Bug Fixes

* запускать агента только по команде в начале строки ([#25](https://github.com/lkiikq/ai-for-developers-project-387/issues/25)) ([d788091](https://github.com/lkiikq/ai-for-developers-project-387/commit/d788091e454b09b7ee36d7a201a42d3b279578a1))
* один комментарий автотриажа без дубля ([#21](https://github.com/lkiikq/ai-for-developers-project-387/issues/21)) ([45b125c](https://github.com/lkiikq/ai-for-developers-project-387/commit/45b125cb71a702f01f52c36932f3f1a4ee8e67f6))
* передать prompt до флага файла в CLI ([#25](https://github.com/lkiikq/ai-for-developers-project-387/issues/25)) ([6fd6cd6](https://github.com/lkiikq/ai-for-developers-project-387/commit/6fd6cd64c94e2f42e7ab5900973cecc047760e5d))
* показывать stderr ревьюера при сбое CLI ([#25](https://github.com/lkiikq/ai-for-developers-project-387/issues/25)) ([990621f](https://github.com/lkiikq/ai-for-developers-project-387/commit/990621ff125a7d1c9696fb3fd67df216caf372cc))
* права для отчёта о бюджете PR ([#25](https://github.com/lkiikq/ai-for-developers-project-387/issues/25)) ([00306f3](https://github.com/lkiikq/ai-for-developers-project-387/commit/00306f3c8f9c4eab0f1b404b9f73f82aa67b9504))
* право на комментарий в PR для бюджета ([#25](https://github.com/lkiikq/ai-for-developers-project-387/issues/25)) ([72ed712](https://github.com/lkiikq/ai-for-developers-project-387/commit/72ed712a7fabb797b0fc20065f9431cade626988))
* ревьюить PR агента, а не отфильтровывать как бота ([#25](https://github.com/lkiikq/ai-for-developers-project-387/issues/25)) ([89b3f1f](https://github.com/lkiikq/ai-for-developers-project-387/commit/89b3f1f332e3dbb2d00cc5b29c125b3b328f2955))
* убрать несуществующий флаг --standalone у CLI ([#25](https://github.com/lkiikq/ai-for-developers-project-387/issues/25)) ([6bcb89a](https://github.com/lkiikq/ai-for-developers-project-387/commit/6bcb89a4a0a094e91304e9aa13f7a8abf5139a2a))
* учитывать прошлые замечания в повторном ревью ([#25](https://github.com/lkiikq/ai-for-developers-project-387/issues/25)) ([7a6074b](https://github.com/lkiikq/ai-for-developers-project-387/commit/7a6074b0641c7e8b0d6d4484ff9dbdaf7118ce32))

## 1.0.0 (2026-11-22)


### Bug Fixes

* headless-права для воркфлоу автоматизации ([#21](https://github.com/lkiikq/ai-for-developers-project-387/issues/21)) ([1a020ae](https://github.com/lkiikq/ai-for-developers-project-387/commit/1a020aef3456f94daa65d0cd217aff3a0ef6999f))
* включить review-комментарии и убрать лишний триггер у агента ([#19](https://github.com/lkiikq/ai-for-developers-project-387/issues/19)) ([99670ca](https://github.com/lkiikq/ai-for-developers-project-387/commit/99670cadc25217dba255c8d3c182de08e464160c))
* включить review-комментарии и убрать лишний триггер у агента ([#19](https://github.com/lkiikq/ai-for-developers-project-387/issues/19)) ([3758057](https://github.com/lkiikq/ai-for-developers-project-387/commit/375805733b6d80535a9fc3a245e4566a2edc8d54))
* глобальный headless-конфиг прав для раннера агента ([#6](https://github.com/lkiikq/ai-for-developers-project-387/issues/6)) ([91c08f5](https://github.com/lkiikq/ai-for-developers-project-387/commit/91c08f5c13cf7e264fee194c7ae7dbfb6e1afcf5))
* глобальный headless-конфиг прав для раннера агента ([#6](https://github.com/lkiikq/ai-for-developers-project-387/issues/6)) ([0fa5bab](https://github.com/lkiikq/ai-for-developers-project-387/commit/0fa5bab134bc5bc24604d0b5fce3f0b2411fb866))
* починить автотриаж, авторевью и аудит по расписанию ([#21](https://github.com/lkiikq/ai-for-developers-project-387/issues/21)) ([e39455f](https://github.com/lkiikq/ai-for-developers-project-387/commit/e39455f7c24192c0d3dd537ee846d1c3ed52c6c8))
* починить автотриаж, авторевью и аудит по расписанию ([#21](https://github.com/lkiikq/ai-for-developers-project-387/issues/21)) ([ed97734](https://github.com/lkiikq/ai-for-developers-project-387/commit/ed97734590d7ef097bcb1166ea1c577f8e4f727a))
* права и промпты воркфлоу после авторевью ([#21](https://github.com/lkiikq/ai-for-developers-project-387/issues/21)) ([4314417](https://github.com/lkiikq/ai-for-developers-project-387/commit/431441757b8a6f3ceba2c965633f6588573db18d))
* разрешить внешние пути для headless-прогонов агента и поднять тайм-аут ([#6](https://github.com/lkiikq/ai-for-developers-project-387/issues/6)) ([b66d1ae](https://github.com/lkiikq/ai-for-developers-project-387/commit/b66d1aeb0b65a914e69eec72b633e9241610d858))
* разрешить внешние пути для headless-прогонов агента и поднять тайм-аут ([#6](https://github.com/lkiikq/ai-for-developers-project-387/issues/6)) ([553720e](https://github.com/lkiikq/ai-for-developers-project-387/commit/553720ec5f3d529980e4415a3f80f170c1eaac02))
* устранить замечания авторевью по воркфлоу ([#21](https://github.com/lkiikq/ai-for-developers-project-387/issues/21)) ([d198054](https://github.com/lkiikq/ai-for-developers-project-387/commit/d198054009bcd061da1302f91ec2dc900e37e198))
* уточнить промпт и бюджет авторевью ([#21](https://github.com/lkiikq/ai-for-developers-project-387/issues/21)) ([1ab516d](https://github.com/lkiikq/ai-for-developers-project-387/commit/1ab516d05dbd52f6f95f32368314ad810bccdc3b))

## 1.0.0 (2026-11-18)


### Features

* бэкенд по контракту: типы встреч, слоты и брони ([#10](https://github.com/lkiikq/ai-for-developers-project-386/issues/10)) ([754e862](https://github.com/lkiikq/ai-for-developers-project-386/commit/754e86238860d582cbbdd24c876d667b676756f3))
* главная страница с описанием сервиса и переходом на запись ([deecb75](https://github.com/lkiikq/ai-for-developers-project-386/commit/deecb751819df462f7a1b9f97ecd788cd994916f))
* границы валидации входных данных в контракте и README (тикет [#3](https://github.com/lkiikq/ai-for-developers-project-386/issues/3)) ([aa11e5a](https://github.com/lkiikq/ai-for-developers-project-386/commit/aa11e5afc2c79802ba2f3be9251bc27d2dd501ff))
* два типа встречи по умолчанию — 30 и 60 минут ([#8](https://github.com/lkiikq/ai-for-developers-project-386/issues/8)) ([9d8aecb](https://github.com/lkiikq/ai-for-developers-project-386/commit/9d8aecbe9e66628291070a6c8e92a07c4b5078be))
* семантика краевых случаев API и тексты ошибок (тикет [#4](https://github.com/lkiikq/ai-for-developers-project-386/issues/4)) ([431dcc8](https://github.com/lkiikq/ai-for-developers-project-386/commit/431dcc8a3679bb6d2c7f8725807ac4b1930633ed))
* страницы владельца и создание типа через SDK ([#11](https://github.com/lkiikq/ai-for-developers-project-386/issues/11)) ([1d00147](https://github.com/lkiikq/ai-for-developers-project-386/commit/1d001474d72b225badaf257963c55134139f8f67))
* страницы гостя — главная, запись и слоты через SDK ([#11](https://github.com/lkiikq/ai-for-developers-project-386/issues/11)) ([bb3c232](https://github.com/lkiikq/ai-for-developers-project-386/commit/bb3c2326bb32c9710496372a2056c34e0dc92f22))
* строка «Создано» на карточке брони — createdAt в контракте, API и e2e ([#8](https://github.com/lkiikq/ai-for-developers-project-386/issues/8)) ([018004c](https://github.com/lkiikq/ai-for-developers-project-386/commit/018004c0427445b3693d5f0d13c30378fc7475c2))
* шапка без кнопки «Владельцу» и вёрстка на всю ширину экрана ([#8](https://github.com/lkiikq/ai-for-developers-project-386/issues/8)) ([9d4e7ac](https://github.com/lkiikq/ai-for-developers-project-386/commit/9d4e7ac6c889fdacd923e1842a53fb5ac15cc0f9))


### Bug Fixes

* выходные в календаре записи приглушены и не выбираются ([#8](https://github.com/lkiikq/ai-for-developers-project-386/issues/8)) ([e8d0c49](https://github.com/lkiikq/ai-for-developers-project-386/commit/e8d0c49c094a442c8ba9e6a738bfe1d250a10463))
* правки спеки по итогам код-ревью интеграционной ветки ([b5957bf](https://github.com/lkiikq/ai-for-developers-project-386/commit/b5957bfdf8ecf02c95318893fb6e571fea978b5c))
