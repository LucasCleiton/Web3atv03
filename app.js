const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');


const app = express();
const port = process.env.PORT || 3000;

// configurar conexão com MySQL

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'web3aula3'


});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL: ' + err.message);

    } else {
        console.log('conetando ao MySQL');
    }
});




// Middleware para lidar com dados codifgicados no corpo da solicitação

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



////// METODOS GET


// Rota para tratar o método GET para buscar CATEGORIAS
app.get('/api/Categorias', (req, res) => {
    const sql = 'SELECT * FROM Categorias;'
    connection.query(sql, (err, result) => {
        if (err) {
            console.error('Erro ao Consultar Registro' + err.message);
            res.status(500).json({ error: 'Erro ao buscar registro' });
        } else {
            res.status(200).json(result);
        }
    });
});

// Rota para tratar o método GET para buscar PRODUTOS
app.get('/api/Produtos', (req, res) => {
    const sql = 'SELECT * FROM produtos;'
    connection.query(sql, (err, result) => {
        if (err) {
            console.error('Erro ao Consultar Registro' + err.message);
            res.status(500).json({ error: 'Erro ao buscar registro' });
        } else {
            res.status(200).json(result);
        }
    });
});

// Rota para tratar o método GET para buscar CIENTES
app.get('/api/Clientes', (req, res) => {
    const sql = 'SELECT * FROM clientes;'
    connection.query(sql, (err, result) => {
        if (err) {
            console.error('Erro ao Consultar Registro' + err.message);
            res.status(500).json({ error: 'Erro ao buscar registro' });
        } else {
            res.status(200).json(result);
        }
    });
});

// Rota para tratar o método GET para buscar PEDIDO
app.get('/api/Pedidos', (req, res) => {
    const sql = 'SELECT * FROM pedidos;'
    connection.query(sql, (err, result) => {
        if (err) {
            console.error('Erro ao Consultar Registro' + err.message);
            res.status(500).json({ error: 'Erro ao buscar registro' });
        } else {
            res.status(200).json(result);
        }
    });
});

// Rota para tratar o método GET para buscar ITENS PEDIDO
app.get('/api/itenspedido', (req, res) => {
    const sql = 'SELECT * FROM itenspedido;'
    connection.query(sql, (err, result) => {
        if (err) {
            console.error('Erro ao Consultar Registro' + err.message);
            res.status(500).json({ error: 'Erro ao buscar registro' });
        } else {
            res.status(200).json(result);
        }
    });
});






////////// METODOS POST //////////


// Rota para Tratar do método POST para inserir uma CATEGORIA
app.post('/api/Categorias', (req, res) => {
    const { nome, descricao } = req.body;
    // Inserir os dados na tabela 'CATEGORIA' no banco de dados usando uma query

    const sql = 'INSERT INTO Categorias( nome, descricao) VALUES(?,?)';
    connection.query(sql, [nome, descricao], (err, result) => {
        if (err) {
            console.error('Erro ao inserir registro' + err.mensage)
            res.status(500).json({ error: 'Erro ao inserir registro' });
        } else {
            console.log('Registo inserido com sucesso!');
            res.status(201).json({ message: 'Registro inserido com sucesso' })
        }

    });
});


// Rota POST para  PRODUTOS

app.post('/api/Produtos', (req, res) => {
    const { nome, descricao, preco, id_categoria, disponivel } = req.body;
    // Inserir os dados na tabela 'PRODUTOS' no banco de dados usando uma query

    const sql = 'INSERT INTO produtos( nome, descricao,preco,id_categoria, disponivel) VALUES(?,?,?,?,?)';
    connection.query(sql, [nome, descricao, preco, id_categoria, disponivel], (err, result) => {

        if (err) {
            console.error('Erro ao inserir registro' + err.mensage)
            res.status(500).json({ error: 'Erro ao inserir registro' });
        } else {
            console.log('Registo inserido com sucesso!');
            res.status(201).json({ message: 'Registro inserido com sucesso' })
        }

    });
});



// Rota POST para  CLIENTES

app.post('/api/Clientes', (req, res) => {
    const { nome, email, endereco, telefone } = req.body;
    // Inserir os dados na tabela 'PRODUTOS' no banco de dados usando uma query

    const sql = 'INSERT INTO clientes ( nome, email,endereco ,telefone) VALUES(?,?,?,?)';
    connection.query(sql, [nome, email, endereco, telefone], (err, result) => {

        if (err) {
            console.error('Erro ao inserir registro' + err.mensage)
            res.status(500).json({ error: 'Erro ao inserir registro' });
        } else {
            console.log('Registo inserido com sucesso!');
            res.status(201).json({ message: 'Registro inserido com sucesso' })
        }

    });
});


// Rota POST para  PEDIDO

app.post('/api/Pedidos', (req, res) => {
    const { id_cliente, data_pedido, status } = req.body;
    // Inserir os dados na tabela 'PRODUTOS' no banco de dados usando uma query

    const sql = 'INSERT INTO pedidos ( id_cliente, data_pedido, status) VALUES(?,?,?)';
    connection.query(sql, [id_cliente, data_pedido, status], (err, result) => {

        if (err) {
            console.error('Erro ao inserir registro' + err.mensage)
            res.status(500).json({ error: 'Erro ao inserir registro' });
        } else {
            console.log('Registo inserido com sucesso!');
            res.status(201).json({ message: 'Registro inserido com sucesso' })
        }

    });
});


// Rota POST para  ITENS PEDIDO

app.post('/api/itenspedidos', (req, res) => {

    const { id_pedido, id_produto, quantidade, preco_unitario } = req.body;
    // Inserir os dados na tabela 'PRODUTOS' no banco de dados usando uma query


    const sql = 'INSERT INTO itenspedido ( id_pedido, id_produto, quantidade, preco_unitario) VALUES(?,?,?,?)';
    connection.query(sql, [id_pedido, id_produto, quantidade, preco_unitario], (err, result) => {

        if (err) {
            console.error('Erro ao inserir registro' + err.mensage)
            res.status(500).json({ error: 'Erro ao inserir registro' });
        } else {
            console.log('Registo inserido com sucesso!');
            res.status(201).json({ message: 'Registro inserido com sucesso' })
        }

    });
});






////// METODOS PUT ////////////


// Rota para lidar com o PUT para atualizar Categoria
app.put('/api/Categoria/:idOuNome', (req, res) => {
    const { idOuNome } = req.params;
    const { nome, descricao } = req.body;

    // Atualizando os dados da tabela

    /// verificando nome ou id

    // Se não for String é ID 
    if (!isNaN(idOuNome)) {

        const sql = 'UPDATE Categorias SET nome = ?, descricao = ? WHERE id = ?;';
        connection.query(sql, [nome, descricao, idOuNome], (err, result) => {
            if (err) {
                console.error('Erro ao Atualizar registro:' + err.message);
                res.status(500).json({ error: 'Erro ao Atualizar reegistro' });
            } else {
                console.log('Registro Atualizado com Sucesso');
                res.status(200).json({ mensage: "Registro Atualizado!" });
            }
        });

        // Caso contrario é nome
    } else {

        const sql = 'UPDATE Categorias SET   nome = ? , descricao = ? WHERE  nome = ? ;';
        connection.query(sql, [nome, descricao, idOuNome], (err, result) => {
            if (err) {
                console.error('Erro ao Atualizar registro:' + err.message);
                res.status(500).json({ error: 'Erro ao Atualizar reegistro' });
            } else {
                console.log('Registro Atualizado com Sucesso');
                res.status(200).json({ mensage: "Registro Atualizado!" });
            }
        });
    }

});


///  Rota PUT para PRODUTOS


app.put('/api/Produtos/:idOuNome', (req, res) => {
    const { idOuNome } = req.params;
    const { nome, descricao, preco, id_categoria, disponivel } = req.body;


    if (!isNaN(idOuNome)) {

        const sql = 'UPDATE produtos SET nome = ?, descricao = ?, preco= ?, id_categoria= ?, disponivel= ? WHERE id = ?;';
        connection.query(sql, [nome, descricao, preco, id_categoria, disponivel, idOuNome], (err, result) => {
            if (err) {
                console.error('Erro ao Atualizar registro:' + err.message);
                res.status(500).json({ error: 'Erro ao Atualizar reegistro' });
            } else {
                console.log('Registro Atualizado com Sucesso');
                res.status(200).json({ mensage: "Registro Atualizado!" });
            }
        });

    } else {
        const sql = 'UPDATE produtos SET  nome = ?,descricao = ?, preco= ?, id_categoria= ?, disponivel= ? WHERE nome = ?;';
        connection.query(sql, [nome, descricao, preco, id_categoria, disponivel, idOuNome], (err, result) => {
            if (err) {
                console.error('Erro ao Atualizar registro:' + err.message);
                res.status(500).json({ error: 'Erro ao Atualizar reegistro' });
            } else {
                console.log('Registro Atualizado com Sucesso');
                res.status(200).json({ mensage: "Registro Atualizado!" });
            }
        });
    }
});



///  Rota PUT para CLIENTE

app.put('/api/Clientes/:idOuNome', (req, res) => {
    const { idOuNome } = req.params;
    const { nome, email, endereco, telefone } = req.body;

    if (!isNaN(idOuNome)) {

        const sql = 'UPDATE clientes SET nome = ?, email = ?, endereco= ?, telefone= ? WHERE id = ?;';
        connection.query(sql, [nome, email, endereco, telefone, idOuNome], (err, result) => {
            if (err) {
                console.error('Erro ao Atualizar registro:' + err.message);
                res.status(500).json({ error: 'Erro ao Atualizar reegistro' });
            } else {
                console.log('Registro Atualizado com Sucesso');
                res.status(200).json({ mensage: "Registro Atualizado!" });
            }
        });
    } else {
        const sql = 'UPDATE clientes SET  nome = ?, email = ?, endereco= ?, telefone= ? WHERE nome = ?;';
        connection.query(sql, [nome, email, endereco, telefone, idOuNome], (err, result) => {
            if (err) {
                console.error('Erro ao Atualizar registro:' + err.message);
                res.status(500).json({ error: 'Erro ao Atualizar reegistro' });
            } else {
                console.log('Registro Atualizado com Sucesso');
                res.status(200).json({ mensage: "Registro Atualizado!" });
            }
        });
    }
});


///  Rota PUT para PEDIDO


app.put('/api/Pedidos/:id', (req, res) => {
    const { id } = req.params;
    const { id_cliente, data_pedido, status } = req.body;

    const sql = 'UPDATE pedidos SET id_cliente = ?, data_pedido = ?, status= ? WHERE id = ?;';
    connection.query(sql, [id_cliente, data_pedido, status, id], (err, result) => {
        if (err) {
            console.error('Erro ao Atualizar registro:' + err.message);
            res.status(500).json({ error: 'Erro ao Atualizar reegistro' });
        } else {
            console.log('Registro Atualizado com Sucesso');
            res.status(200).json({ mensage: "Registro Atualizado!" });
        }
    });
});

///  Rota PUT para ITENS PEDIDO

app.put('/api/itenspedidos/:id', (req, res) => {
    const { id } = req.params;
    const { id_pedido, id_produto, quantidade, preco_unitario } = req.body;

    const sql = 'UPDATE itenspedido SET id_cliente = ?, data_pedido = ?, status= ? WHERE id = ?;';
    connection.query(sql, [id_pedido, id_produto, quantidade, preco_unitario, id], (err, result) => {
        if (err) {
            console.error('Erro ao Atualizar registro:' + err.message);
            res.status(500).json({ error: 'Erro ao Atualizar reegistro' });
        } else {
            console.log('Registro Atualizado com Sucesso');
            res.status(200).json({ mensage: "Registro Atualizado!" });
        }
    });
});




////////// METODOS DELETE ////////////


// Excluir o Registro na tabela CATEGORIA

app.delete('/api/Categoria/:idOuNome', (req, res) => {
    const { idOuNome } = req.params;


    if (!isNaN(idOuNome)) {
        // Excluir Registro na Tabela 'CATEGORIA' no banco
        const sql = 'DELETE FROM Categorias WHERE id=?';
        connection.query(sql, [idOuNome], (err, result) => {

            if (err) {
                console.error('Erro ao Excluir Registro' + err.message);
                res.status(500).json({ erro: 'Erro ao excluir registro' });
            } else {
                if (result.affectedRows > 0) {
                    console.log('Registro excluido com Sucesso!');
                    res.status(200).json({ message: 'Registro excluido' })
                } else {
                    console.log('Registro não encontrado');
                    res.status(404).json({ message: 'Registo não encontrado ' });
                }
            }
        });



    } else {

        const sql = 'DELETE FROM Categorias WHERE nome=?';
        connection.query(sql, [idOuNome], (err, result) => {

            if (err) {
                console.error('Erro ao Excluir Registro' + err.message);
                res.status(500).json({ erro: 'Erro ao excluir registro' });
            } else {
                if (result.affectedRows > 0) {
                    console.log('Registro excluido com Sucesso!');
                    res.status(200).json({ message: 'Registro excluido' })
                } else {
                    console.log('Registro não encontrado');
                    res.status(404).json({ message: 'Registo não encontrado ' });
                }
            }
        });


    }

});

// Excluir o Registro de  PRODUTOS

app.delete('/api/Produtos/:idOuNome', (req, res) => {
    const { idOuNome } = req.params;

    // Excluir Registro na Tabela 'CATEGORIA' no banco

    if (!isNaN(idOuNome)) {
        const sql = 'DELETE FROM produtos WHERE id = ?;';
        connection.query(sql, [idOuNome], (err, result) => {
            if (err) {
                console.error('Erro ao Excluir Registro' + err.message); s
                res.status(500).json({ erro: 'Erro ao excluir registro' });
            } else {
                if (result.affectedRows > 0) {
                    console.log('Registro excluido com Sucesso!');
                    res.status(200).json({ message: 'Registro excluido' })
                } else {
                    console.log('Registro não encontrado');
                    res.status(404).json({ message: 'Registo não encontrado ' });
                }
            }
        });
    } else {
        const sql = 'DELETE FROM produtos WHERE nome = ?;';
        connection.query(sql, [idOuNome], (err, result) => {

            if (err) {
                console.error('Erro ao Excluir Registro' + err.message);
                res.status(500).json({ erro: 'Erro ao excluir registro' });
            } else {
                if (result.affectedRows > 0) {
                    console.log('Registro excluido com Sucesso!');
                    res.status(200).json({ message: 'Registro excluido' })
                } else {
                    console.log('Registro não encontrado');
                    res.status(404).json({ message: 'Registo não encontrado ' });
                }
            }
        });
    }
});


// Excluir o Registro de  CLIENTES

app.delete('/api/Clientes/:idOuNome', (req, res) => {
    const { idOuNome } = req.params;

    // Excluir Registro na Tabela 'CATEGORIA' no banco

    if (!isNaN(idOuNome)) {
        const sql = 'DELETE FROM clientes WHERE id = ?;';
        connection.query(sql, [idOuNome], (err, result) => {
            if (err) {
                console.error('Erro ao Excluir Registro' + err.message); s
                res.status(500).json({ erro: 'Erro ao excluir registro' });
            } else {
                if (result.affectedRows > 0) {
                    console.log('Registro excluido com Sucesso!');
                    res.status(200).json({ message: 'Registro excluido' })
                } else {
                    console.log('Registro não encontrado');
                    res.status(404).json({ message: 'Registo não encontrado ' });
                }
            }
        });
    } else {
        const sql = 'DELETE FROM clientes WHERE nome = ?;';
        connection.query(sql, [idOuNome], (err, result) => {

            if (err) {
                console.error('Erro ao Excluir Registro' + err.message);
                res.status(500).json({ erro: 'Erro ao excluir registro' });
            } else {
                if (result.affectedRows > 0) {
                    console.log('Registro excluido com Sucesso!');
                    res.status(200).json({ message: 'Registro excluido' })
                } else {
                    console.log('Registro não encontrado');
                    res.status(404).json({ message: 'Registo não encontrado ' });
                }
            }
        });
    }
});

// Excluir o Registro de PEDIDO

app.delete('/api/Pedidos/:id', (req, res) => {
    const { id } = req.params;
    // Excluir Registro na Tabela 'CATEGORIA' no banco
    const sql = 'DELETE FROM pedidos WHERE id = ?;';
    connection.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Erro ao Excluir Registro' + err.message);
            res.status(500).json({ erro: 'Erro ao excluir registro' });
        } else {
            if (result.affectedRows > 0) {
                console.log('Registro excluido com Sucesso!');
                res.status(200).json({ message: 'Registro excluido' })
            } else {
                console.log('Registro não encontrado');
                res.status(404).json({ message: 'Registo não encontrado ' });
            }
        }
    });
});


// Excluir o Registro de PEDIDO

app.delete('/api/itenspedidos/:id', (req, res) => {
    const { id } = req.params;
    // Excluir Registro na Tabela 'CATEGORIA' no banco
    const sql = 'DELETE FROM itenspedido WHERE id = ?;';
    connection.query(sql, [id], (err, result) => {
        if (err) {
            console.error('Erro ao Excluir Registro' + err.message);
            res.status(500).json({ erro: 'Erro ao excluir registro' });
        } else {
            if (result.affectedRows > 0) {
                console.log('Registro excluido com Sucesso!');
                res.status(200).json({ message: 'Registro excluido' })
            } else {
                console.log('Registro não encontrado');
                res.status(404).json({ message: 'Registo não encontrado ' });
            }
        }
    });
});



///////////////////////////////////////////////////////////////////////////////////////////////////




// Iniicar o servidor

app.listen(port, () => {
    console.log('Servidor iniciado na porta ${port}');
});