# Discord QR Code Generator Bot

A Node.js Discord bot that generates customizable QR codes from user-provided URLs using Discord slash commands and the Google Chart API. The project demonstrates modular application design, REST API integration, environment variable management, and asynchronous programming with Node.js.

---

## Features

- Generate QR codes directly from Discord using slash commands
- Customize QR code dimensions (height and width)
- Customize QR code color
- Modular command-based architecture
- External API integration using the Google Chart API
- Environment variable configuration with dotenv

---

## Technologies Used

- Node.js
- JavaScript (ES6)
- Discord.js
- Discord Slash Commands
- Google Chart API
- dotenv
- npm
- Git & GitHub

---

## Project Structure

```
discord-qr-bot/
│
├── commands/
│   ├── ping.js
│   └── qr.js
│
├── externalAPIs/
│   └── googleQR.js
│
├── tests/
│
├── deployCommands.js
├── index.js
├── package.json
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/TharunaBandi/discord-qr-bot.git
```

Navigate to the project folder:

```bash
cd discord-qr-bot
```

Install dependencies:

```bash
npm install
```

---

## Environment Variables

Create a `.env` file in the project root.

```env
QR_BOT_TOKEN=YOUR_DISCORD_BOT_TOKEN
CLIENT_ID=YOUR_CLIENT_ID
GUILD_ID=YOUR_GUILD_ID
```

---

## Register Slash Commands

```bash
node deployCommands.js
```

---

## Run the Bot

```bash
npm start
```

or

```bash
npm run devStart
```

---

## Bot Commands

### `/qr`

Generates a QR code from a URL.

Example:

```
/qr
url=https://github.com
height=300
width=300
color=FF0000
```

---

### `/ping`

Checks whether the bot is online.

```
/ping
```

Response:

```
Pong!
```

---

## Node.js Concepts Demonstrated

- Modular Programming
- Event-Driven Architecture
- Asynchronous Programming (`async/await`)
- Environment Variables (`dotenv`)
- npm Package Management
- REST API Integration
- Discord Bot Development
- Slash Command Registration
- Error Handling

---

## Future Improvements

- Download QR codes as image attachments
- Support text encoding in addition to URLs
- Add QR code styles and themes
- Store usage history in a database
- Dockerize the application
- Add unit and integration tests

---

## Author

**Tharuna Bandi**

GitHub: https://github.com/TharunaBandi
