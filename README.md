# only-test-task

### Contents

- [Description](#description)
- [Technologies](#technologies)
- [Install](#install)
- [Custom data](#Custom_data)

---

## Description

Test task for the frontend position at [Only](https://only.digital/). Deadline - 08/10.2024.

[PR link](https://github.com/GoodValts/only-test-task/pull/1)

## Technologies

Technology stack:

- Next.js
- TypeScript
- SCSS
- ESLint
- Prettier

---

## Install

To start the application, please make sure you have [Git](https://git-scm.com) and [Node.js](https://nodejs.org) installed on your machine. Then, follow these steps:

1. Clone repository: `git clone https://github.com/GoodValts/only-test-task/`
1. Navigate to the project directory: `cd only-test-task`
1. Install dependencies: `npm install`
1. Start the development server: `npm run dev`
1. Open the link or navigate to `http://localhost:3000/`

Your can also open [deploy link](https://only-test-task.netlify.app)

## Custom_data

Open `src/lib/data.json` and edit data as you want. Also, you can create your own data file and change import in `src/app/components/HistoricalDates/HistoricalDates.tsx`

Types:
```
{
  name: string;
  dates: {
    year: number;
    event: string;
  }[];
}[]
```
