# DiscordServerListerBot

This is a simple Discord bot script that lists all the servers it's currently in, along with invite links (if the bot has permission to create them). It's useful for bot developers and server administrators who want a quick overview of where their bot is active.

## Features

-   Handles permission errors gracefully when creating invites.
-   Uses `chalk` for colored console output, making it easier to read.

## Getting Started

### Prerequisites

-   Node.js (v16 or higher recommended)
-   npm (Node Package Manager) or yarn
-   A Discord bot token.

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/elfadhel-dev/DiscordServerListerBot.git
    cd DiscordServerListerBot
    ```

2.  Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3.  Create a `.env` file in the root of your project and add your bot token:

    ```
    TOKEN=YOUR_DISCORD_BOT_TOKEN
    ```

4.  Run the bot:

    ```bash
    node index.js
    ```

### Usage

Once the bot is running, it will log into Discord and print a list of all servers it's in to the console. Each server will be listed with its name, ID, and an invite link (if available).

### Dependencies

-   `discord.js`: For interacting with the Discord API.
-   `chalk`: For colored console output.
-   `dotenv`: For loading environment variables from a `.env` file.

### Contributing

Contributions are welcome! If you find a bug or have a suggestion, please open an issue or submit a pull request.

### License

This project is licensed under the [MIT License](LICENSE) - see the `LICENSE` file for details.
