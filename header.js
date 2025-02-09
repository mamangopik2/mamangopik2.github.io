// header.js
let title = "webku"
let head = `
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        header,
        footer {
            background-color: #f4f4f4;
            padding: 10px;
            width: 100%;
        }

        #body-content {
            padding: 20px;
            width: 80%;
        }
            input {
            width: 100%;
            padding: 8px;
            box-sizing: border-box;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        .form-group {
            margin-bottom: 15px;
        }

        .form-group label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        button {
            background-color: #28a745;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            margin-top: 1%;
            width: 100%;
        }
    </style>
</head>`
document.getElementById('header').innerHTML = `
    ${head}
    <img src="logo.png" alt="Logo" style="height: 50px;">
    <h1>akaBELD Multi industri</h1>
`;