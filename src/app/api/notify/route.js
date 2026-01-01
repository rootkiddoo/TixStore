import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const data = await request.json();
        const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

        if (!webhookUrl) {
            return NextResponse.json({error: "Webhook URL not configured"}, {status: 500});
        }

        const embedData = {
            embeds: [{
            title: "New Payment Initiated",
            description: `A user is interested in buying **${data.akunNama}**`,
            color: data.method.includes("PayPal") ? 0xFFB700 : 0x22C55E,
            fields: [
                { name: "Payment Method", value: `**${data.method}**`, inline: true },
                { name: "Account Name", value: `**${data.akunNama}**`, inline: true },
                 { name: "Next Step", value: "Verification pending.", inline: false }
            ],
            footer: { text: "TixStore Security System • 2026"},
            timestamp: new Date().toISOString()
        }]
    };

    const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(embedData)
    });

    if (!response.ok) {
        console.error("Discord API Error:", response.statusText);
        return NextResponse.json({error: "Failed to send notification"}, {status: 500});
    }

    return NextResponse.json({success: true});
} catch (error) {
    return NextResponse.json({error: "Failed to send notification"}, {status:500});
    }
}