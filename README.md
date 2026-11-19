# Paper & Play — лендінг

Лендінг для проєкту Paper & Play: тематичні пакети ігор і воркшитів для вчителів мов.
Макет: [Paper & Play — Landing](https://claude.ai/artifact/K31o8jx4fG4Yf8okkHx5o6).

Стек: Vite + React + TypeScript, SCSS-модулі, без бекенду.

## Команди

| | |
|---|---|
| `npm run dev` | dev-сервер |
| `npm run build` | перевірка типів + збірка в `dist/` |
| `npm run lint` | oxlint |

## Структура `src/`

| Папка | Що |
|---|---|
| `styles/` | `tokens.scss` — **усі** кольори, шрифти, відступи, радіуси, тіні; `_mixins.scss` — брейкпоінти й контейнер; `base.scss`, `fonts.scss` |
| `config/` | id розділів (`sections.ts`), посилання меню й футера (`navigation.ts`), назва й рік (`site.ts`) |
| `data/` | дані тем (`topics.ts`): назва, рівень, кількість слів, ігри. Числа в лендінг не зашиваємо, беремо звідси |
| `components/` | багаторазові: `Button`, `Link`, `Brand`, `Logo`, `Card`, `Sticker`, `Icon` |
| `layout/` | каркас сторінки: `Layout`, `Header`, `Footer` |
| `sections/` | розділи лендінгу (Hero, How it works, …) — додаються по одному |

Кожен компонент — папка `Name/` з `Name.tsx` і `Name.module.scss`.

## Правила стилів

- **Лише змінні.** У модулях компонентів тільки `var(--token)`: жодних кольорів, розмірів у px і тіней прямо в коді. Нове значення спершу додаємо в `styles/tokens.scss`.
- **Назви токенів** збігаються з блоком «CSS-змінні для нового проєкту» на артборді макета.
- **Відступи** — шкала `--space-N`, де `N = px / 4` (`--space-2-5` = 10 px).
- **Розміри тексту** в rem (1rem = 16 px): значення з макета в px = rem × 16.
- **Телефон.** Мобільні значення перевизначені в `tokens.scss` (блок `@include mobile`), тож у компонентах media-запити майже не потрібні. Брейкпоінти живуть лише в `_mixins.scss`.
- **Шрифти** хостяться локально (`assets/fonts/`, ліцензії OFL поруч): без Google Fonts.
- Id розділів і якорі — тільки через `config/sections.ts`.
