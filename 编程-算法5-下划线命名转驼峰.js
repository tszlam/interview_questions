
/**
 * 将 object keys 由下划线命名转换为驼峰命名
 * @param {Record<string, unknown>} obj
 * @return {Record<string, unknown>}
 */
const camelCaseKeys = function (obj) {
    if (Array.isArray(obj)) {
        return obj.map(item => isObject(item) ? camelCaseKeys(item) : item)
    } else {
        return translateObject(obj);
    }
};

const translateObject = (obj) => {
    const newObject = {};
    Object.keys(obj).forEach(key => {
        const names = key.split('_').map((value, index) => {
            if (index === 0) return value;
            const current = value.split('');
            return current.shift().toUpperCase() + current.join('');
        });
        newObject[names.join('')] = isObject(obj[key]) ? camelCaseKeys(obj[key]) : obj[key];
    })
    return newObject;
}

const isObject = (obj) => {
    return typeof obj === 'object';
}

// 以下为测试代码，请勿修改
const case1 = {
    group_en_name: 'programing languages',
    item_list: [{
        language_name: 'c++',
        user_count: 10000,
        keyword_list: ['namespace', 'struct', 'using', 'auto']
    }, {
        language_name: 'java_script',
    }],
};
const result1 = {
    groupEnName: 'programing languages',
    itemList: [{
        languageName: 'c++',
        userCount: 10000,
        keywordList: ['namespace', 'struct', 'using', 'auto']
    }, {
        languageName: 'java_script',
    }],
};

const case2 = [{
    language_name: 'c',
    keyword_list: ['namespace', 'struct', 'using', 'auto']
}, {
    language_name: 'java, typescript, flow, dart, ...',
    keyword_list: ['const', 'let', 'function', 'async', 'await']
}];
const result2 = [{
    languageName: 'c',
    keywordList: ['namespace', 'struct', 'using', 'auto']
}, {
    languageName: 'java, typescript, flow, dart, ...',
    keywordList: ['const', 'let', 'function', 'async', 'await']
}];

const errors = [[case1, result1], [case2, result2]]
    .map(([from, to], i) => {
        const jsonFrom = JSON.stringify(camelCaseKeys(from), null, 2);
        const jsonTo = JSON.stringify(to, null, 2);
        if (jsonFrom !== jsonTo) {
            return `case${i + 1} 未通过，预期 ${jsonFrom} 转换结果: ${jsonTo}`;
        }
    })
    .filter(e => e);

if (errors.length) {
    console.error(`[ERROR] ${errors}`);
    console.error(`[ERROR] 转换结果不符合预期`);
} else {
    console.info('[OK] 转换结果符合预期');
}