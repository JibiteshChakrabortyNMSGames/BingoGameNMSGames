const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
var mysql = require('mysql2')

var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Jibimax123',
    database:'bingo'
})



const app = express()
app.use(bodyParser.json())
app.use(cors({origin:"*"}))

function getwinamount(betamount1,betamount2,betamount3,betamount4,betamount4,betamount5,betamount6)
{
            // Matrix 1
        const matrix1 = [
            [5, 1, 9, 25, 3],
            [8, 22, 10, 19, 7],
            [6, 18, 16, 11, 17],
            [24, 21, 14, 20, 13],
            [12, 23, 2, 4, 15]
        ];
        
        // Matrix 2
        const matrix2 = [
            [9, 24, 16, 4, 6],
            [13, 19, 14, 20, 25],
            [2, 18, 15, 12, 17],
            [1, 22, 11, 21, 8],
            [10, 7, 5, 23, 3]
        ];
        
        // Matrix 3
        const matrix3 = [
            [6, 7, 3, 24, 1],
            [23, 4, 12, 18, 2],
            [5, 19, 20, 16, 22],
            [11, 17, 9, 15, 25],
            [10, 13, 21, 4, 8]
        ];
        
        // Matrix 4
        const matrix4 = [
            [3, 7, 10, 4, 9],
            [24, 21, 18, 22, 8],
            [15, 14, 17, 11, 2],
            [13, 20, 12, 19, 23],
            [6, 25, 16, 1, 5]
        ];
        
        // Matrix 5
        const matrix5 = [
            [4, 6, 1, 23, 5],
            [25, 15, 3, 17, 13],
            [9, 19, 21, 12, 20],
            [10, 18, 16, 14, 8],
            [7, 24, 22, 2, 11]
        ];
        
        // Matrix 6
        const matrix6 = [
            [8, 23, 10, 13, 4],
            [2, 17, 16, 14, 24],
            [20, 12, 22, 19, 5],
            [25, 15, 9, 18, 11],
            [1, 7, 21, 3, 6]
        ];
        
        
        let winamount = 0;

        function generateRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        
        const numbers = [];
        
        while (numbers.length < 5) {
            const randomNumber = generateRandomInt(1, 26);
            if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
            }
        }
        
        console.log(numbers);
        const randomNumber = Math.floor(Math.random() * 2) + 1;

        console.log(randomNumber);
        
        //Matrix 1 
        //ROWS
        for(let i = 0; i < matrix1.length; i++)
        {
            const m = matrix1[i];
            
            let is4 = false;

            for(let j = 0; j < 2; j++)
            {
                const list = [];
                list.push(m[j]);
                list.push(m[j+1]);
                list.push(m[j+2]);
                list.push(m[j+3]);

                if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
                {
                    winamount = winamount + 20*betamount1;
                    is4 = true;
                }
            }

            if(!is4)
            {
                for(let j = 0; j < 3; j++)
                {
                    const list = [];
                    list.push(m[j]);
                    list.push(m[j+1]);
                    list.push(m[j+2]);
                    

                    if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
                    {
                        winamount = winamount + 4*betamount1;
                        
                    }
                }
            }
        }
        //COLUMNS
        for(let i = 0; i < matrix1.length; i++)
        {
            const m = [];
            m.push(matrix1[0][i]);
            m.push(matrix1[1][i]);
            m.push(matrix1[2][i]);
            m.push(matrix1[3][i]);
            m.push(matrix1[4][i]);
            
            let is4 = false;

            for(let j = 0; j < 2; j++)
            {
                const list = [];
                list.push(m[j]);
                list.push(m[j+1]);
                list.push(m[j+2]);
                list.push(m[j+3]);

                if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
                {
                    winamount = winamount + 20*betamount1;
                    is4 = true;
                }
            }

            if(!is4)
            {
                for(let j = 0; j < 3; j++)
                {
                    const list = [];
                    list.push(m[j]);
                    list.push(m[j+1]);
                    list.push(m[j+2]);
                    

                    if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
                    {
                        winamount = winamount + 4*betamount1;
                        
                    }
                }
            }
        }
        
        //DIAGONALS
        let list = [8,18,14,4];
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount1;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount1;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount1;
        }

        list = [1,10,11,13];
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount1;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount1;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount1;
        }

        list = [23,14,11,7];
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount1;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount1;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount1;
        }

        list = [24,18,10,25];
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount1;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount1;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount1;
        }

        list = [6,21,2]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount1;
        }

        list = [9,19,17]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount1;
        }

        list = [2,20,17]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount1;
        }

        list = [6,22,9]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount1;
        }

        list = [5,22,16,20,15]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount1;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]) && numbers.includes(list[4]))
        {
            winamount = winamount + 20*betamount1;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount1;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount1;
        }
        else if(numbers.includes(list[2]) && numbers.includes(list[3]) && numbers.includes(list[4]))
        {
            winamount = winamount + 4*betamount1;
        }

        list = [12,21,16,19,3]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount1;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]) && numbers.includes(list[4]))
        {
            winamount = winamount + 20*betamount1;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount1;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount1;
        }
        else if(numbers.includes(list[2]) && numbers.includes(list[3]) && numbers.includes(list[4]))
        {
            winamount = winamount + 4*betamount1;
        }


        //<-------------------------------------------------------------------------------------------------------------------------------------------------------->
        
        // Matrix 2
        // ROWS
        for (let i = 0; i < matrix2.length; i++) {
            const row = matrix2[i];
        
            let is4 = false;
        
            for (let j = 0; j < 2; j++) {
            const list = [];
            list.push(row[j]);
            list.push(row[j + 1]);
            list.push(row[j + 2]);
            list.push(row[j + 3]);
        
            if (
                numbers.includes(list[0]) &&
                numbers.includes(list[1]) &&
                numbers.includes(list[2]) &&
                numbers.includes(list[3])
            ) {
                winamount = winamount + 20 * betamount2;
                is4 = true;
            }
            }
        
            if (!is4) {
            for (let j = 0; j < 3; j++) {
                const list = [];
                list.push(row[j]);
                list.push(row[j + 1]);
                list.push(row[j + 2]);
        
                if (
                numbers.includes(list[0]) &&
                numbers.includes(list[1]) &&
                numbers.includes(list[2])
                ) {
                winamount = winamount + 4 * betamount2;
                }
            }
            }
        }
        
        // COLUMNS
        for (let i = 0; i < matrix2.length; i++) {
            const column = [];
            column.push(matrix2[0][i]);
            column.push(matrix2[1][i]);
            column.push(matrix2[2][i]);
            column.push(matrix2[3][i]);
            column.push(matrix2[4][i]);
        
            let is4 = false;
        
            for (let j = 0; j < 2; j++) {
            const list = [];
            list.push(column[j]);
            list.push(column[j + 1]);
            list.push(column[j + 2]);
            list.push(column[j + 3]);
        
            if (
                numbers.includes(list[0]) &&
                numbers.includes(list[1]) &&
                numbers.includes(list[2]) &&
                numbers.includes(list[3])
            ) {
                winamount = winamount + 20 * betamount2;
                is4 = true;
            }
            }
        
            if (!is4) {
            for (let j = 0; j < 3; j++) {
                const list = [];
                list.push(column[j]);
                list.push(column[j + 1]);
                list.push(column[j + 2]);
        
                if (
                numbers.includes(list[0]) &&
                numbers.includes(list[1]) &&
                numbers.includes(list[2])
                ) {
                winamount = winamount + 4 * betamount2;
                }
            }
            }
        }
        
        // DIAGONALS
        
        list = [13,18,11,23];
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount2;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount2;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount2;
        }

        list = [24,14,12,8];
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount2;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount2;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount2;
        }

        list = [25,12,11,7];
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount2;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount2;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount2;
        }

        list = [4,14,18,1];
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount2;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount2;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount2;
        }

        list = [2,22,5]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount2;
        }

        list = [16,20,17]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount2;
        }

        list = [7,21,5]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount2;
        }

        list = [16,19,2]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount2;
        }

        list = [9,19,15,21,3]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount2;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]) && numbers.includes(list[4]))
        {
            winamount = winamount + 20*betamount2;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount2;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount2;
        }
        else if(numbers.includes(list[2]) && numbers.includes(list[3]) && numbers.includes(list[4]))
        {
            winamount = winamount + 4*betamount2;
        }

        list = [6,20,15,22,10]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount2;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]) && numbers.includes(list[4]))
        {
            winamount = winamount + 20*betamount2;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount2;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount2;
        }
        else if(numbers.includes(list[2]) && numbers.includes(list[3]) && numbers.includes(list[4]))
        {
            winamount = winamount + 4*betamount2;
        }


        //<---------------------------------------------------------------------------------------------------------------------------------------------------------------------
        // Matrix 3
        // ROWS
        for (let i = 0; i < matrix3.length; i++) {
            const row = matrix3[i];
        
            let is4 = false;
        
            for (let j = 0; j < 2; j++) {
            const list = [];
            list.push(row[j]);
            list.push(row[j + 1]);
            list.push(row[j + 2]);
            list.push(row[j + 3]);
        
            if (
                numbers.includes(list[0]) &&
                numbers.includes(list[1]) &&
                numbers.includes(list[2]) &&
                numbers.includes(list[3])
            ) {
                winamount = winamount + 20 * betamount3;
                is4 = true;
            }
            }
        
            if (!is4) {
            for (let j = 0; j < 3; j++) {
                const list = [];
                list.push(row[j]);
                list.push(row[j + 1]);
                list.push(row[j + 2]);
        
                if (
                numbers.includes(list[0]) &&
                numbers.includes(list[1]) &&
                numbers.includes(list[2])
                ) {
                winamount = winamount + 4 * betamount3;
                }
            }
            }
        }
        
        // COLUMNS
        for (let i = 0; i < matrix3.length; i++) {
            const column = [];
            column.push(matrix3[0][i]);
            column.push(matrix3[1][i]);
            column.push(matrix3[2][i]);
            column.push(matrix3[3][i]);
            column.push(matrix3[4][i]);
        
            let is4 = false;
        
            for (let j = 0; j < 2; j++) {
            const list = [];
            list.push(column[j]);
            list.push(column[j + 1]);
            list.push(column[j + 2]);
            list.push(column[j + 3]);
        
            if (
                numbers.includes(list[0]) &&
                numbers.includes(list[1]) &&
                numbers.includes(list[2]) &&
                numbers.includes(list[3])
            ) {
                winamount = winamount + 20 * betamount3;
                is4 = true;
            }
            }
        
            if (!is4) {
            for (let j = 0; j < 3; j++) {
                const list = [];
                list.push(column[j]);
                list.push(column[j + 1]);
                list.push(column[j + 2]);
        
                if (
                numbers.includes(list[0]) &&
                numbers.includes(list[1]) &&
                numbers.includes(list[2])
                ) {
                winamount = winamount + 4 * betamount3;
                }
            }
            }
        }
        
        // DIAGONALS
        list = [23,19,9,4];
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount3;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount3;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount3;
        }

        list = [7,12,16,25];
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount3;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount3;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount3;
        }

        list = [2,16,9,13];
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount3;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount3;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount3;
        }

        list = [11,19,12,24];
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount3;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount3;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount3;
        }

        list = [5,17,21]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount3;
        }

        list = [3,18,22]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount3;
        }

        list = [21,15,22]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount3;
        }

        list = [5,4,3]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount3;
        }

        list = [6,4,20,15,8]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount3;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]) && numbers.includes(list[4]))
        {
            winamount = winamount + 20*betamount3;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount3;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount3;
        }
        else if(numbers.includes(list[2]) && numbers.includes(list[3]) && numbers.includes(list[4]))
        {
            winamount = winamount + 4*betamount3;
        }

        list = [1,18,20,17,10]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount3;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]) && numbers.includes(list[4]))
        {
            winamount = winamount + 20*betamount3;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount3;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount3;
        }
        else if(numbers.includes(list[2]) && numbers.includes(list[3]) && numbers.includes(list[4]))
        {
            winamount = winamount + 4*betamount3;
        }

        //<------------------------------------------------------------------------------------------------------------------------------------------------
        // Matrix 4
            // ROWS
            for (let i = 0; i < matrix4.length; i++) {
                const row = matrix4[i];
            
                let is4 = false;
            
                for (let j = 0; j < 2; j++) {
                const list = [];
                list.push(row[j]);
                list.push(row[j + 1]);
                list.push(row[j + 2]);
                list.push(row[j + 3]);
            
                if (
                    numbers.includes(list[0]) &&
                    numbers.includes(list[1]) &&
                    numbers.includes(list[2]) &&
                    numbers.includes(list[3])
                ) {
                    winamount = winamount + 20 * betamount4;
                    is4 = true;
                }
                }
            
                if (!is4) {
                for (let j = 0; j < 3; j++) {
                    const list = [];
                    list.push(row[j]);
                    list.push(row[j + 1]);
                    list.push(row[j + 2]);
            
                    if (
                    numbers.includes(list[0]) &&
                    numbers.includes(list[1]) &&
                    numbers.includes(list[2])
                    ) {
                    winamount = winamount + 4 * betamount4;
                    }
                }
                }
            }
            
            // COLUMNS
            for (let i = 0; i < matrix4.length; i++) {
                const column = [];
                column.push(matrix4[0][i]);
                column.push(matrix4[1][i]);
                column.push(matrix4[2][i]);
                column.push(matrix4[3][i]);
                column.push(matrix4[4][i]);
            
                let is4 = false;
            
                for (let j = 0; j < 2; j++) {
                const list = [];
                list.push(column[j]);
                list.push(column[j + 1]);
                list.push(column[j + 2]);
                list.push(column[j + 3]);
            
                if (
                    numbers.includes(list[0]) &&
                    numbers.includes(list[1]) &&
                    numbers.includes(list[2]) &&
                    numbers.includes(list[3])
                ) {
                    winamount = winamount + 20 * betamount4;
                    is4 = true;
                }
                }
            
                if (!is4) {
                for (let j = 0; j < 3; j++) {
                    const list = [];
                    list.push(column[j]);
                    list.push(column[j + 1]);
                    list.push(column[j + 2]);
            
                    if (
                    numbers.includes(list[0]) &&
                    numbers.includes(list[1]) &&
                    numbers.includes(list[2])
                    ) {
                    winamount = winamount + 4 * betamount4;
                    }
                }
                }
            }
            
        // DIAGONALS
        list = [24,14,12,1]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount4;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount4;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount4;
        }

        list = [7,18,11,23];
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount4;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount4;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount4;
        }

        list = [8,11,12,25]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount4;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount4;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount4;
        }

        list = [4,18,14,13]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount4;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount4;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount4;
        }

        list = [15,20,16]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount4;
        }

        list = [10,22,2]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount4;
        }

        list = [10,21,15]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount4;
        }

        list = [2,19,16]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount4;
        }

        list = [3,21,17,19,5]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount4;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]) && numbers.includes(list[4]))
        {
            winamount = winamount + 20*betamount4;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount4;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount4;
        }
        else if(numbers.includes(list[2]) && numbers.includes(list[3]) && numbers.includes(list[4]))
        {
            winamount = winamount + 4*betamount4;
        }

        list = [9,22,17,20,6]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount4;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]) && numbers.includes(list[4]))
        {
            winamount = winamount + 20*betamount4;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount4;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount4;
        }
        else if(numbers.includes(list[2]) && numbers.includes(list[3]) && numbers.includes(list[4]))
        {
            winamount = winamount + 4*betamount4;
        }

        //<---------------------------------------------------------------------------------------------------------------------------------------------------------
        // Matrix 5
        // ROWS
        for (let i = 0; i < matrix5.length; i++) {
            const row = matrix5[i];
        
            let is4 = false;
        
            for (let j = 0; j < 2; j++) {
            const list = [];
            list.push(row[j]);
            list.push(row[j + 1]);
            list.push(row[j + 2]);
            list.push(row[j + 3]);
        
            if (
                numbers.includes(list[0]) &&
                numbers.includes(list[1]) &&
                numbers.includes(list[2]) &&
                numbers.includes(list[3])
            ) {
                winamount = winamount + 20 * betamount5;
                is4 = true;
            }
            }
        
            if (!is4) {
            for (let j = 0; j < 3; j++) {
                const list = [];
                list.push(row[j]);
                list.push(row[j + 1]);
                list.push(row[j + 2]);
        
                if (
                numbers.includes(list[0]) &&
                numbers.includes(list[1]) &&
                numbers.includes(list[2])
                ) {
                winamount = winamount + 4 * betamount5;
                }
            }
            }
        }
        
        // COLUMNS
        for (let i = 0; i < matrix5.length; i++) {
            const column = [];
            column.push(matrix5[0][i]);
            column.push(matrix5[1][i]);
            column.push(matrix5[2][i]);
            column.push(matrix5[3][i]);
            column.push(matrix5[4][i]);
        
            let is4 = false;
        
            for (let j = 0; j < 2; j++) {
            const list = [];
            list.push(column[j]);
            list.push(column[j + 1]);
            list.push(column[j + 2]);
            list.push(column[j + 3]);
        
            if (
                numbers.includes(list[0]) &&
                numbers.includes(list[1]) &&
                numbers.includes(list[2]) &&
                numbers.includes(list[3])
            ) {
                winamount = winamount + 20 * betamount5;
                is4 = true;
            }
            }
        
            if (!is4) {
            for (let j = 0; j < 3; j++) {
                const list = [];
                list.push(column[j]);
                list.push(column[j + 1]);
                list.push(column[j + 2]);
        
                if (
                numbers.includes(list[0]) &&
                numbers.includes(list[1]) &&
                numbers.includes(list[2])
                ) {
                winamount = winamount + 4 * betamount5;
                }
            }
            }
        }
        
        // DIAGONALS
        list = [25,19,16,2]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount5;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount5;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount5;
        }

        list = [6,3,12,8]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount5;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount5;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount5;
        }

        list = [13,12,16,24]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount5;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount5;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount5;
        }

        list = [23,3,19,10]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount5;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount5;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount5;
        }

        list = [20,14,22]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount5;
        }

        list = [1,15,9]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount5;
        }

        list = [1,17,20]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount5;
        }

        list = [9,18,22]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount5;
        }

        list = [4,15,21,14,11]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount5;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]) && numbers.includes(list[4]))
        {
            winamount = winamount + 20*betamount5;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount5;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount5;
        }
        else if(numbers.includes(list[2]) && numbers.includes(list[3]) && numbers.includes(list[4]))
        {
            winamount = winamount + 4*betamount5;
        }

        list = [5,17,21,18,7]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount5;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]) && numbers.includes(list[4]))
        {
            winamount = winamount + 20*betamount5;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount5;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount5;
        }
        else if(numbers.includes(list[2]) && numbers.includes(list[3]) && numbers.includes(list[4]))
        {
            winamount = winamount + 4*betamount5;
        }
        
        //<------------------------------------------------------------------------------------------------------------------------------------
        // Matrix 6
        // ROWS
        for (let i = 0; i < matrix6.length; i++) {
            const row = matrix6[i];
        
            let is4 = false;
        
            for (let j = 0; j < 2; j++) {
            const list = [];
            list.push(row[j]);
            list.push(row[j + 1]);
            list.push(row[j + 2]);
            list.push(row[j + 3]);
        
            if (
                numbers.includes(list[0]) &&
                numbers.includes(list[1]) &&
                numbers.includes(list[2]) &&
                numbers.includes(list[3])
            ) {
                winamount = winamount + 20 * betamount6;
                is4 = true;
            }
            }
        
            if (!is4) {
            for (let j = 0; j < 3; j++) {
                const list = [];
                list.push(row[j]);
                list.push(row[j + 1]);
                list.push(row[j + 2]);
        
                if (
                numbers.includes(list[0]) &&
                numbers.includes(list[1]) &&
                numbers.includes(list[2])
                ) {
                winamount = winamount + 4 * betamount6;
                }
            }
            }
        }
        
        // COLUMNS
        for (let i = 0; i < matrix6.length; i++) {
            const column = [];
            column.push(matrix6[0][i]);
            column.push(matrix6[1][i]);
            column.push(matrix6[2][i]);
            column.push(matrix6[3][i]);
            column.push(matrix6[4][i]);
        
            let is4 = false;
        
            for (let j = 0; j < 2; j++) {
            const list = [];
            list.push(column[j]);
            list.push(column[j + 1]);
            list.push(column[j + 2]);
            list.push(column[j + 3]);
        
            if (
                numbers.includes(list[0]) &&
                numbers.includes(list[1]) &&
                numbers.includes(list[2]) &&
                numbers.includes(list[3])
            ) {
                winamount = winamount + 20 * betamount6;
                is4 = true;
            }
            }
        
            if (!is4) {
            for (let j = 0; j < 3; j++) {
                const list = [];
                list.push(column[j]);
                list.push(column[j + 1]);
                list.push(column[j + 2]);
        
                if (
                numbers.includes(list[0]) &&
                numbers.includes(list[1]) &&
                numbers.includes(list[2])
                ) {
                winamount = winamount + 4 * betamount6;
                }
            }
            }
        }
        
        // DIAGONALS
        list = [2,12,9,3]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount6;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount6;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount6;
        }

        list = [23,16,19,11]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount6;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount6;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount6;
        }

        list = [8,17,22,18,6]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount6;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount6;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount6;
        }

        list = [24,19,9,7]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount6;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount6;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount6;
        }

        list = [20,15,21]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount6;
        }

        list = [10,14,5]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount6;
        }

        list = [5,18,21]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount6;
        }

        list = [10,17,20]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount6;
        }

        list = [8,17,22,18,6]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount6;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]) && numbers.includes(list[4]))
        {
            winamount = winamount + 20*betamount6;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount6;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount6;
        }
        else if(numbers.includes(list[2]) && numbers.includes(list[3]) && numbers.includes(list[4]))
        {
            winamount = winamount + 4*betamount6;
        }

        list = [4,14,22,15,1]
        if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 20*betamount6;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]) && numbers.includes(list[4]))
        {
            winamount = winamount + 20*betamount6;
        }
        else if(numbers.includes(list[0]) && numbers.includes(list[1]) && numbers.includes(list[2]))
        {
            winamount = winamount + 4*betamount6;
        }
        else if(numbers.includes(list[1]) && numbers.includes(list[2]) && numbers.includes(list[3]))
        {
            winamount = winamount + 4*betamount6;
        }
        else if(numbers.includes(list[2]) && numbers.includes(list[3]) && numbers.includes(list[4]))
        {
            winamount = winamount + 4*betamount6;
        }
        
        
        //console.log(numbers)
        //console.log(randomNumber)
        //console.log(winamount)
        //console.log(randomNumber*winamount)

        const ans = numbers
        ans.push(randomNumber)
        ans.push(winamount*randomNumber)

        return ans
}

app.post('/betsPlaced',(req,res)=>{
    const id = req.body.id;
    const target_bets = req.body.target_bet;
    const bets = JSON.parse(target_bets)
    const set = bets[0] + bets[1] + bets[2] + bets[3] + bets[4] + bets[5]
    //console.log(bets)
    

    var sql = 'SELECT * FROM users WHERE id = ?'

    con.query(sql,[id],(err,result)=>{
        if(err){
            res.json(err);
        }
        else
        {
            if(result.length == 0)
            {
                const reply = {message : "User Not Found"}
                res.status(404).json(reply)
            }
            else
            {
                
                    const ans = getwinamount(bets[0],bets[1],bets[2],bets[3],bets[4],bets[5])
                    var win
                    const bal = result[0].balance;

                    sql = 'UPDATE users SET balance = ? WHERE id = ?'
                    con.query(sql,[bal-set,id],(err,result)=>{
                        if(err)
                        {
                            throw err;
                        }
                    })
                    if(ans.length < 7)
                    {
                        win = 0
                    }
                    else
                    {
                        win = ans[6]
                    }
                    if(isNaN(win))
                    {
                        win = 0
                    }
                    const bingo = []
                    bingo.push(ans[0])
                    bingo.push(ans[1])
                    bingo.push(ans[2])
                    bingo.push(ans[3])
                    bingo.push(ans[4])
                    bingo.push(ans[5])

                    sql = 'UPDATE users SET win_amount = ? WHERE id = ?'
                    con.query(sql,[win,id],(err,result)=>{
                        if(err)
                        {
                            throw err;
                        }
                    })
                    const reply = {message : "Bets Have Been Placed",
                                   data:{bingo:bingo,win_amount : win,balance:bal-set}}
                    res.status(200).json(reply)

                
            }
        }
    })
})

app.post('/doubleUp',(req,res)=>{
    const id = req.body.id;
    const choice = req.body.double_Up;
    //const winamount = req.body.win_amount;
    //const w = parseFloat(winamount)

    var sql = 'SELECT * FROM users WHERE id = ?'

    con.query(sql,[id],(err,result)=>{
        if(err){
            res.json(err);
        }
        else
        {
            if(result.length == 0)
            {
                const reply = {message : "User Not Found"}
                res.status(404).json(reply)
            }
            else
            {
                
                    const small = [0,1,2,3,4,5,13,14,15,16,17,18,26,27,28,29,30,31,39,40,41,42,43,44]
                    const guarantee = [6,19,32,45]
                    const big = [7,8,9,10,11,12,20,21,22,23,24,25,33,34,35,36,37,38,46,47,48,49,50,51]

                    let randomNumber = Math.floor(Math.random() * 52); // Generates a random number between 0 and 51
                    const w = result[0].win_amount
                    let win = 0
                    if(guarantee.includes(randomNumber))
                    {
                        win = 2*w
                    }
                    else
                    {
                        if(choice === 'small' && small.includes(randomNumber))
                        {
                            win = 2*w
                        }

                        if(choice === 'big' && big.includes(randomNumber))
                        {
                            win = 2*w
                        }
                    }
                    const reply = {
                        message:"Sending Updated Win Amount",
                        data:{
                            "double_up_number":randomNumber,
                            "win_amount":win
                        }
                    }
                    sql = 'UPDATE users SET win_amount = ? WHERE id = ?'
                    con.query(sql,[win,id],(err,result)=>{
                        if(err)
                        {
                            throw err;
                        }
                    })
                    res.status(200).json(reply)

                
            }
        }
    })

})

app.post('/takeAmount',(req,res)=>{
    const id = req.body.id;

    var sql = 'SELECT * FROM users WHERE id = ?'

    con.query(sql,[id],(err,result)=>{
        if(err){
            res.json(err);
        }
        else
        {
            if(result.length == 0)
            {
                const reply = {message : "User Not Found"}
                res.status(404).json(reply)
            }
            else
            {
                
                const win = result[0].win_amount
                const bal = result[0].balance

                sql = 'UPDATE users SET win_amount = ? WHERE id = ?'

                con.query(sql,[0,id],(err,result)=>{
                    if(err)
                    {
                        throw err;
                    }
                })

                const newbal = bal + win;

                sql = 'UPDATE users SET balance = ? WHERE id = ?'

                con.query(sql,[newbal,id],(err,result)=>{
                    if(err)
                    {
                        throw err;
                    }
                })

                const reply = {message:'Amount Added to Balance',balance:newbal}
                res.status(200).json(reply)
            }
        }
    })

})

app.post('/getBalance',(req,res)=>{
    const id = req.body.id;

    var sql = 'SELECT * FROM users where id = ?'

    con.query(sql,[id],(err,result)=>{
        if(err)
        {
            throw err;
        }
        else
        {
            if(result.length == 0)
            {
                const reply = {message:"User Not Found"}
                res.status(404).json(reply)
            }
            else
            {
                const bal = result[0].balance;
                const reply = {balance : bal}
                res.status(200).json(reply)
            }
        }
    })
})

app.listen(3000,()=>{
    console.log("Server Started")
})