function getSortedArray(mas, key) {

    let k = mas.length;
    for (let i = 0; i < k; i++)
    {
        for (let j = 0; j < (k - i - 1); j++)
        {
            
            if (mas[j][key] > mas[j + 1][key])
            {
                
                let s = {}; 
                for (let k in mas) {
                    s[k] = mas[k];
                }
                s = mas[j];
                mas[j] = mas[j + 1];
                mas[j + 1] = s;
            }
        }

    }
    return mas;
}


let array = [{name: 'Андрей', age: 11}, {name: 'Паша', age: 20}, {name: 'Ольга', age: 45}, {name: 'Дима', age: 40}, {name: 'Даша', age: 22}];
array = getSortedArray(array, 'age');
console.log(array);