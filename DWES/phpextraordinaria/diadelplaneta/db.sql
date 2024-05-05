DROP TABLE IF EXISTS acciones;

CREATE TABLE acciones (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fecha DATE NOT NULL,
    lugar VARCHAR(255) NOT NULL,
    nombre VARCHAR(255),
    descripcion TEXT,
    imagen VARCHAR(255) NOT NULL
);

INSERT INTO acciones (fecha, lugar, nombre, descripcion, imagen) VALUES ('2024-04-22', 'Madrid', 'Pedro', 'planto una flor', 'imagenes/flor.jpeg');
INSERT INTO acciones (fecha, lugar, nombre, descripcion, imagen) VALUES ('2024-04-22', 'Madrid', 'Pedro', 'planto una flor', 'imagenes/flor.jpeg');
INSERT INTO acciones (fecha, lugar, nombre, descripcion, imagen) VALUES ('2024-04-22', 'Madrid', 'Pedro', 'planto una flor', 'imagenes/flor.jpeg');
