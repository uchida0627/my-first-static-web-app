
module.exports = async function (context, req) {
    const Chara = ["A","B","C","D","E"]
    let rundomSL = Math.floor(Math.random()*SLName.length)


    context.res.json({
        text: "Hello from the Backend API.生成された文字は" + Chara[rundomSL] + "です。" 
    });
};