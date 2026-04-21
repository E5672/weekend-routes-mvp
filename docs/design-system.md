# Design System — Weekend Routes MVP

## Стиль

**Premium dark travel editorial.**
Не туристический агрегатор. Не карточки с рейтингом. Это editorial журнал про путешествия — тёмный, атмосферный, с акцентом на визуальную глубину и типографику.

---

## Цвета

| Роль | Значение |
|---|---|
| Фон страницы | `#0b0b0b` |
| Золотой акцент (primary) | `#D4AF70` |
| Primary кнопка (gradient) | `linear-gradient(135deg, #DDB96A 0%, #C49435 100%)` |
| Текст заголовка | `#ffffff` |
| Текст описания | `rgba(255,255,255,0.65)` |
| Метка секции | `rgba(255,255,255,0.45)` |
| Разделитель | `rgba(255,255,255,0.07)` |
| Граница карточки | `rgba(255,255,255,0.08)` |

---

## Типографика

- **Заголовок маршрута (H1):** Georgia / serif, `clamp(56px, 6.5vw, 84px)`, weight 400, `lineHeight 1.1`
- **Претайтл:** uppercase, `11px`, `letterSpacing 0.28em`, gold, opacity 0.9
- **Описание:** `16px`, weight 300, `lineHeight 1.8`, `letterSpacing 0.018em`
- **Метки секций:** uppercase, `10px`, weight 600, `letterSpacing 0.18em`, `rgba(255,255,255,0.45)`
- **Табы:** `13px`, активный — gold + `borderBottom: 2px solid gold`

---

## Hero

- Полный экран: `h-screen min-h-[660px]`
- Изображение: `next/image` с `fill` + `object-cover object-center`
- Оверлей-градиент (кинематографический, бесшовный переход в фон):
  ```
  linear-gradient(
    to bottom,
    rgba(0,0,0,0.10)  0%,
    rgba(0,0,0,0.25) 30%,
    rgba(0,0,0,0.68) 60%,
    rgba(11,11,11,0.96) 80%,
    rgb(11,11,11) 100%
  )
  ```
  Финальный цвет (`rgb(11,11,11)`) точно совпадает с фоном страницы — граница исчезает.
- Текст: `absolute inset-x-0 bottom-0`, выровнен по левому краю от паддинга страницы

---

## Асимметрия (ключевое правило)

**Никакого `max-w-*` + `mx-auto` в hero-блоке.** Это делает layout центрированным и дешёвым.

Правило:
- Контейнер hero текста: `w-full flex items-end justify-between`
- Левая колонка: заголовок + описание + метрики + кнопки, `maxWidth: 580px`
- Правая колонка: стеклянный блок с фактами (badges), `width: 230px`, `hidden lg:block`
- Паддинги: `px-8 sm:px-14` — одинаковые по всей высоте страницы (nav + hero + content card)

---

## Контент-карточка (под hero)

- Наложение на hero: `marginTop: -32px`, `position: relative`, `zIndex: 10`
- Паддинг: `px-4 sm:px-8 lg:px-14` — совпадает с паддингом hero
- Glassmorphism:
  ```
  background: rgba(20,20,20,0.6)
  backdropFilter: blur(20px)
  border: 1px solid rgba(255,255,255,0.08)
  borderRadius: 8px 8px 16px 16px
  boxShadow: 0 0 0 1px rgba(255,255,255,0.03), 0 32px 80px rgba(0,0,0,0.8), 0 8px 32px rgba(0,0,0,0.5)
  ```
- `borderRadius: 8px 8px 16px 16px` — верхние углы почти прямые, чтобы не было видимого "края карточки" на тёмном фоне

---

## Кнопки

**Primary (gold gradient):**
```
background: linear-gradient(135deg, #DDB96A 0%, #C49435 100%)
color: #0a0a0a
padding: 14px 32px
borderRadius: 9999px
boxShadow: 0 4px 28px rgba(212,175,112,0.38), 0 1px 0 rgba(255,255,255,0.15) inset
```

**Secondary (glass):**
```
background: rgba(255,255,255,0.06)
backdropFilter: blur(12px)
border: 1px solid rgba(255,255,255,0.16)
color: rgba(255,255,255,0.75)
padding: 14px 26px
borderRadius: 9999px
```

Hover: только CSS (`hover:brightness-110`, `hover:brightness-125`). Без JS event handlers (Server Components).

---

## Структура страницы маршрута

```
/routes/[slug]

├── <nav>          абсолютный, top-0, logo + links + "← К списку маршрутов"
├── <section>      hero: fullscreen image + gradient overlay + hero text
│   ├── left       pretitle / H1 serif / description / metrics row / 2 CTA
│   └── right      badges glass card (lg+)
└── <div>          content card, -32px overlap
    ├── tab bar    9 табов, активный "Обзор" подчёркнут gold
    └── grid 10col
        ├── 3col   Сценарий дня — timeline (dot + connector + time + title)
        ├── 4col   Рядом есть + По дороге — PlaceCardItem grid 2col
        └── 3col   Советы — icon boxes + "Смотреть все советы"
```

---

## Запрещено

- Светлый фон (white, slate-50, gray-*) на страницах маршрутов
- `max-w-* mx-auto` в hero layout
- Серые placeholder-блоки вместо контента
- `border` вокруг hero (нарушает единый слой)
- Стандартные indigo/blue кнопки в стиле Bootstrap
- Явная граница между фото и контентом
- JS event handlers в Server Components

---

## Эталонная страница

**`/routes/staraya-ladoga`** — принята как базовый шаблон.

Файл: `app/routes/[slug]/page.tsx`
Данные: объект `routeData["staraya-ladoga"]` внутри того же файла.

Все новые маршруты добавляются в `routeData` с той же структурой:
`title`, `pretitle`, `description`, `params`, `heroImage`, `badges`, `metrics`, `scenario`, `nearby`, `enroute`, `sections`.

Изображения: `public/images/routes/[slug]/hero.png`
