import { Client, GatewayIntentBits, PermissionsBitField } from 'discord.js';
import chalk from 'chalk';

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages // Needed to access channels and create invites
    ]
});

client.once('ready', async () => {
    console.log(chalk.green(`✅ Logged in as ${client.user.tag}`));
    console.log(chalk.blue('\n🌍 The bot is in the following servers:'));

    for (const guild of client.guilds.cache.values()) {
        console.log(chalk.yellow(`➡ ${guild.name} (ID: ${guild.id})`));

        let inviteLink = '❌ No permission to create invite';
        try {
            const textChannels = guild.channels.cache.filter(
                (channel) => channel.type === 0 && channel.permissionsFor(client.user).has(PermissionsBitField.Flags.CreateInstantInvite)
            );

            if (textChannels.size > 0) {
                const invite = await textChannels.first().createInvite({ maxAge: 0, maxUses: 1 });
                inviteLink = invite.url;
            }
        } catch (error) {
            console.error(chalk.red(`⚠️ Failed to create invite for ${guild.name}: ${error.message}`));
        }

        console.log(chalk.magenta(`    🔗 Invite: ${inviteLink}`));
    }
});

client.login(process.env.TOKEN);
