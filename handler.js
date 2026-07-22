const config = require("./config");

function handleCommand(message) {

    if (!message.startsWith(config.PREFIX)) {
        return;
    }

    const command = message.slice(1).toLowerCase();

    if (command === "ping") {
        console.log("🏓 Pong!");
    }

    else if (command === "menu") {
        console.log("📋 Opening Menu...");
    }

    else {
        console.log("❌ Unknown command.");
    }

}

module.exports = handleCommand;
