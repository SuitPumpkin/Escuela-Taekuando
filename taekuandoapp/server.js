const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database('alumnos.db');

// Ruta para obtener los alumnos desde la base de datos para ponerlo en la tabla
app.get('/alumnos', (req, res) => {
    db.all('SELECT * FROM Alumno', (err, rows) => {
        if (err) {
            console.error('Error al obtener los alumnos:', err);
            res.status(500).json({ error: 'Error al obtener los alumnos de la base de datos' });
        } else {
            res.json(rows);
        }
    });
});
//esto hace el post de los alumnos puedes crear una similar para lo demás del CRUD
app.post('/crear-alumno', (req, res) => {
    const alumno = req.body;
    db.run(`INSERT INTO Alumno (nombre, segundo_nombre, apellido, apellido_materno, fecha_nacimiento, correo, telefono_alumno, tutor_legal, telefono_tutor, cinta) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [alumno.nombre, alumno.segundo_nombre, alumno.apellido, alumno.apellido_materno, alumno.fecha_nacimiento, alumno.correo, alumno.telefono_alumno, alumno.tutor_legal, alumno.telefono_tutor, alumno.cinta], function(err) {
            if (err) {
                console.error('Error al insertar alumno:', err);
                res.status(500).json({ error: 'Error al insertar alumno en la base de datos' });
            } else {
                console.log(`Alumno insertado correctamente con ID: ${this.lastID}`);
                res.json({ message: 'Alumno creado correctamente' });
            }
        });
});

// Ruta de bienvenida
app.get('/', (req, res) => {
    res.send('¡Bienvenido a mi servidor!');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});