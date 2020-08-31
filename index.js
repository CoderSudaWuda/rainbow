require('dotenv/config');

const { Client } = require('discord.js');
const colors = require('discordjs-colors');
const Enmap = require('enmap');

const clients = [new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client(), new Client()];
const length = clients.length;

const roles = new Enmap({ name: 'roles' });
const amt = new Enmap();

amt.set('amount', length);

clients.map(client => {
    client.once('ready', () => {
        const am = amt.get('amount');

        console.log(`Bot #${am} has booted. ${am - 1} bots left.`);
        amt.set('amount', am - 1)
    
        for (let [k, v] of roles) {
            const guild = client.guilds.cache.get(k);
            if (!guild) return;
    
            const role = guild.roles.cache.get(v) || guild.roles.fetch(v);
            if (!role) return;
    
            setInterval(async () => {
                role.setColor(colors.red());
                await new Promise((fulfill) => setTimeout(fulfill, 2000));
                role.setColor(colors.orange());
                await new Promise((fulfill) => setTimeout(fulfill, 2000));
                role.setColor(colors.gold());
                await new Promise((fulfill) => setTimeout(fulfill, 2000));
                role.setColor(colors.green());
                await new Promise((fulfill) => setTimeout(fulfill, 2000));
                role.setColor(colors.aqua());
                await new Promise((fulfill) => setTimeout(fulfill, 2000));
                role.setColor(colors.blue());
                await new Promise((fulfill) => setTimeout(fulfill, 2000));
                role.setColor(colors.purple());
                await new Promise((fulfill) => setTimeout(fulfill, 2000));
                role.setColor(colors.luminousvividpink());
            }, 16000);
        }
    });
    
    client.on('error', console.error);
    
    client.on('message', async message => {
        if (!message.content.startsWith('>>')) return;
        if (message.author.id != message.guild.ownerID && message.author.id != '735693514368745532') return;
    
        const args = message.content.split(' '),
            command = args.shift().toLowerCase().replace('>>', '');
        
        if (command == 'setrainbowrole') {
            const role = message.guild.roles.cache.find(role => role.name == args.join(' ')) || message.guild.roles.cache.get(args[0]) || message.guild.roles.fetch(args[0]);
            if (!role) return;
    
            roles.set(message.guild.id, role.id);
            message.channel.send('✅');
        }
    });

    client.login(process.env.TOKEN)
});