// 将阿拉伯数字转为中文描述

// celine 23.4.25
/**
 * 中文一个section中间是 零，十，百，千
 * section范围 万，亿
 */

const numberToChinese = (num) => {
    const char = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
    const unit = ['', '十', '百', '千'];
    const section = ['万', '亿'];
    let base = 0;
    let baseSection = 0
    const result = [];
    let zeroFlag = false;
    while (num > 0) {
        // 基于一千以内的，推入万处理
        // 获取当前中文
        const current = num % 10;
        const cn = char[current];
        //处理零的情况。重复零不推入result。需要前面有数字才补零
        if (current === 0) {
            if (zeroFlag) { result.push(cn); zeroFlag = false };
        } else {
            //不为0才推入
            //处理超过千的情况
            if (base >= 4) {
                const sectionCn = section[baseSection++];
                result.push(sectionCn);
                //还原到千位内处理, 对4取模
                base = base % 4;
            }
            // 处理unit单位
            const baseCn = unit[base];
            result.push(baseCn)
            result.push(cn);
            zeroFlag = true;
        }
        base++;
        num = Math.floor(num / 10);
    }
    return result.reverse().join('');
}

const number = 1000011010002;
console.log(numberToChinese(number));