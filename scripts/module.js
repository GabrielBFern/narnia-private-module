

Hooks.on("initializeDynamicTokenRingConfig", (a) => {
    const default_ring_rctr = new foundry.canvas.placeables.tokens.DynamicRingData({
        Id: 'default_ring_rctr',
        label: "Default ring",
        spritesheet: "modules/narnia-private-module/assets/default ring/ring-dnd.json"
    });
    a.addConfig("default_ring_rctr", default_ring_rctr);
});