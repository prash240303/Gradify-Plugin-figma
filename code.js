"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
figma.showUI(__html__, {
    title: "Gradify",
    width: 275,
    height: 320,
});
figma.ui.onmessage = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    yield figma.loadFontAsync({ family: "Rubik", style: "Regular" });
    if (msg.type === "create") {
        const node = [];
        console.log("code ts: palette no: " + msg.palette);
        console.log("code ts: angle :" + msg.angle);
        //HUE GRADIENT GENRATOR
        //color lib : pastel colors
        const colorlib1 = [
            "#EDF2FB",
            "#CCDBFD",
            "#ABC4FF",
            "#FFC09F",
            "#A0CED9",
            "#ADF7B6",
            "#FFEE93",
            "#DDEDEA",
            "#DAEAF6",
            "#E8DFF5",
            "#BBD6B8",
            "#F7C8E0",
            "#B9F3FC",
            "#F1F7B5",
        ];
        // neon colors
        const colorlib2 = [
            "#865DFF",
            "#16FF00",
            "#8DCBE6",
            "#F3CCFF",
            "#00F5FF",
            "#00FFD1",
            "#F637EC",
            "#FF4949",
            "#00FFAB",
        ];
        //
        const colorlib3 = [
            "#AD7BE9",
            "#AD7BE9",
            "#8BF5FA",
            "#3F979B",
            "#93BFCF",
            "#A084DC",
            "#82AAE3",
            "#00E7FF",
            "#F6F6C9",
            "#9F73AB",
            "#CDFCF6",
            "#FFD124",
            "#99FEFF",
        ];
        const colorlib4 = ["#0035FF", "#FF8993", "#8900C9", "#00E5E0"];
        function rand() {
            return Math.floor(Math.random() * 11);
        }
        let hexCol1;
        let hexCol2;
        //creating a frame to contain all the rectanges
        const tintNode = figma.createFrame();
        tintNode.name = "Gradient";
        tintNode.cornerRadius = 20;
        tintNode.resize(150, 150);
        // rect for gradient fill
        const gradientrect = figma.createRectangle();
        gradientrect.name = "Gradient fill";
        gradientrect.cornerRadius = 20;
        gradientrect.resize(150, 150);
        switch (msg.palette) {
            case "1":
                hexCol1 = colorlib1[rand()];
                hexCol2 = colorlib1[rand()];
                if (hexCol1 == hexCol2) {
                    hexCol1 = colorlib1[rand()];
                    hexCol2 = colorlib1[rand()];
                }
                break;
            case "2":
                hexCol1 = colorlib2[rand()];
                hexCol2 = colorlib2[rand()];
                if (hexCol1 == hexCol2) {
                    hexCol1 = colorlib1[rand()];
                    hexCol2 = colorlib1[rand()];
                }
                break;
            case "3":
                hexCol1 = colorlib2[rand()];
                hexCol2 = colorlib2[rand()];
                if (hexCol1 == hexCol2) {
                    hexCol1 = colorlib1[rand()];
                    hexCol2 = colorlib1[rand()];
                }
                break;
            case "4":
                hexCol1 = colorlib2[rand()];
                hexCol2 = colorlib2[rand()];
                if (hexCol1 == hexCol2) {
                    hexCol1 = colorlib1[rand()];
                    hexCol2 = colorlib1[rand()];
                }
                break;
        }
        console.log(hexCol1);
        console.log(hexCol2);
        const hexToRBG = (hex) => {
            let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result
                ? {
                    r: parseInt(result[1], 16),
                    g: parseInt(result[2], 16),
                    b: parseInt(result[3], 16),
                }
                : null;
        };
        const color1R = hexToRBG(hexCol1).r / 255;
        const color1G = hexToRBG(hexCol1).g / 255;
        const color1B = hexToRBG(hexCol1).b / 255;
        const color2R = hexToRBG(hexCol2).r / 255;
        const color2G = hexToRBG(hexCol2).g / 255;
        const color2B = hexToRBG(hexCol2).b / 255;
        const DEFAULT_AFFINE_TRANSFORMS = {
            "0": [
                [0, -1, 1],
                [1, 0, 0.5],
            ],
            "45": [
                [0.5, -0.5, 0.5],
                [0.5, 0.5, 0],
            ],
            "90": [
                [1, 0, 0],
                [0, 1, 0.5],
            ],
            "135": [
                [0.5, 0.5, 0],
                [-0.5, 0.5, 0.5],
            ],
            "180": [
                [0, 1, 0],
                [-1, 0, 1.5],
            ],
            "225": [
                [-0.5, 0.5, 0.5],
                [-0.5, -0.5, 1],
            ],
            "270": [
                [-1, 0, 1],
                [0, -1, 1.5],
            ],
            "315": [
                [-0.5, -0.5, 1],
                [0.5, -0.5, 0.5],
            ],
            "360": [
                [0, -1, 1],
                [1, 0, 0.5],
            ],
        };
        let angle = msg.angle;
        console.log(angle);
        // console.log()
        gradientrect.fills = [
            {
                type: "GRADIENT_LINEAR",
                gradientTransform: DEFAULT_AFFINE_TRANSFORMS[angle],
                gradientStops: [
                    { position: 0, color: { r: color1R, g: color1G, b: color1B, a: 1 } },
                    { position: 1, color: { r: color2R, g: color2G, b: color2B, a: 1 } },
                ],
            },
        ];
        tintNode.appendChild(gradientrect);
        node.push(tintNode);
        // noise function
        const imageUrl = "https://cdn.dribbble.com/userupload/7416672/file/original-e5a33c53f346f07a3c3cefb06a3e911d.png?compress=1&resize=1024x1024";
        fetch(imageUrl)
            .then((response) => response.arrayBuffer())
            .then((buffer) => {
            const imageUint8Array = new Uint8Array(buffer);
            const imageHash = figma.createImage(imageUint8Array).hash;
            // Create a rectangle node
            const noise = figma.createRectangle();
            noise.name = "noise";
            noise.resize(150, 150); // Set the width and height of the rectangle
            noise.cornerRadius = 20;
            noise.fills = [
                {
                    type: "IMAGE",
                    scaleMode: "CROP",
                    imageHash: imageHash,
                    blendMode: "OVERLAY",
                },
            ];
            noise.opacity = 0.8;
            // Add the rectangle to the current page
            // figma.currentPage.appendChild(rectangle);
            tintNode.appendChild(noise);
            // Zoom to fit the newly created rectangle
            figma.notify("✅ Gradient Added");
            figma.viewport.scrollAndZoomIntoView(node);
            figma.currentPage.selection = node;
            // setTimeout(() => {
            //   figma.closePlugin();
            // }, 100);
        })
            .catch((error) => {
            console.error("Error loading image:", error);
        });
        if (msg.type == "cancel") {
            figma.closePlugin();
        }
    }
});
// Make sure to close the plugin when you're done. Otherwise the plugin will
// keep running, which shows the cancel button at the bottom of the screen.
