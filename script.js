let width = prompt( 'Введите ширину дива', 100 );
let height = prompt( 'Введите высоту дива', 100 );
let color = prompt( 'Введите цвет дива', 'red' );

// document.write(` <div width="${width}" height="${height}"></div> `)
document.write(` <div style="
                            width:${width}px;
                            height:${height}px;
                            background:${color};
                            "></div> `);