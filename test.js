class ScratchFetch {
    constructor() {
    }
    
    getInfo() {
        return {
            "id": "Fetch",
            "name": "Quick Tools",
            "blocks": [
                {
                    "opcode": "noteBlock",
                    "blockType": "command",
                    "text": "Note [NOTE]",
                    "arguments": {
                        "NOTE": {
                            "type": "string",
                            "defaultValue": "Enter your note"
                        }
                    }
                }
            ]
        };
    }

    noteBlock({ NOTE }) {
        // Here, you can perform any actions you want with the note, such as storing it in a variable or displaying it.
        console.log("Note:", NOTE);
    }
}

Scratch.extensions.register(new ScratchFetch());
