
let fs=require("fs");

/**
 * 
 * @param {num} num 生产数量
 */
function writeJson(num){
    for(let i =0;i<=num;i++){
        let oldData={
            "version": "1.0.0",
            "model": "model.moc",
            "textures": [],
            "layout": {
                "center_x": 0,
                "center_y": -0.05,
                "width": 2
            },
            "hit_areas_custom": {
                "head_x": [-0.35, 0.6],
                "head_y": [0.19, -0.2],
                "body_x": [-0.3, -0.25],
                "body_y": [0.3, -0.9]
            },
            "motions": {
                "idle": [{
                    "file": "motions/WakeUp.mtn"
                },
                {
                    "file": "motions/Breath1.mtn"
                },
                {
                    "file": "motions/Breath2.mtn"
                },
                {
                    "file": "motions/Breath3.mtn"
                },
                {
                    "file": "motions/Breath5.mtn"
                },
                {
                    "file": "motions/Breath7.mtn"
                },
                {
                    "file": "motions/Breath8.mtn"
                }],
                "sleepy": [{
                    "file": "motions/Sleeping.mtn"
                }],
                "flick_head": [{
                    "file": "motions/Touch Dere1.mtn"
                },
                {
                    "file": "motions/Touch Dere2.mtn"
                },
                {
                    "file": "motions/Touch Dere3.mtn"
                },
                {
                    "file": "motions/Touch Dere4.mtn"
                },
                {
                    "file": "motions/Touch Dere5.mtn"
                },
                {
                    "file": "motions/Touch Dere6.mtn"
                }],
                "tap_body": [{
                    "file": "motions/Touch1.mtn"
                },
                {
                    "file": "motions/Touch2.mtn"
                },
                {
                    "file": "motions/Touch3.mtn"
                },
                {
                    "file": "motions/Touch4.mtn"
                },
                {
                    "file": "motions/Touch5.mtn"
                },
                {
                    "file": "motions/Touch6.mtn"
                }],
                "": [{
                    "file": "motions/Breath1.mtn"
                },
                {
                    "file": "motions/Breath2.mtn"
                },
                {
                    "file": "motions/Breath3.mtn"
                },
                {
                    "file": "motions/Breath4.mtn"
                },
                {
                    "file": "motions/Breath5.mtn"
                },
                {
                    "file": "motions/Breath6.mtn"
                },
                {
                    "file": "motions/Breath7.mtn"
                },
                {
                    "file": "motions/Breath8.mtn"
                },
                {
                    "file": "motions/Fail.mtn"
                },
                {
                    "file": "motions/Sleeping.mtn"
                },
                {
                    "file": "motions/Success.mtn"
                },
                {
                    "file": "motions/Sukebei1.mtn"
                },
                {
                    "file": "motions/Sukebei2.mtn"
                },
                {
                    "file": "motions/Sukebei3.mtn"
                },
                {
                    "file": "motions/Touch Dere1.mtn"
                },
                {
                    "file": "motions/Touch Dere2.mtn"
                },
                {
                    "file": "motions/Touch Dere3.mtn"
                },
                {
                    "file": "motions/Touch Dere4.mtn"
                },
                {
                    "file": "motions/Touch Dere5.mtn"
                },
                {
                    "file": "motions/Touch Dere6.mtn"
                },
                {
                    "file": "motions/Touch1.mtn"
                },
                {
                    "file": "motions/Touch2.mtn"
                },
                {
                    "file": "motions/Touch3.mtn"
                },
                {
                    "file": "motions/Touch4.mtn"
                },
                {
                    "file": "motions/Touch5.mtn"
                },
                {
                    "file": "motions/Touch6.mtn"
                },
                {
                    "file": "motions/WakeUp.mtn"
                }]
            }
        }
        oldData.textures.push(`textures/${i}.png`);
        let writerStream =fs.createWriteStream (`./${i}.json`);
        // 使用 utf8 编码写入数据
        writerStream.write(JSON.stringify(oldData),"UTF8");
        // 标记文件末尾
        writerStream.end()
        // 处理流事件 --> data, end, and error
        writerStream.on("finish",function(){
            console.log(`${i}.json -write over-`)
        });
        writerStream.on("error",function(err){
            console.log(err.stack)
        });
    }
}

writeJson(50)