DROP TABLE IF EXISTS matches;

CREATE TABLE matches(
    id INT PRIMARY KEY AUTO_INCREMENT,
    country VARCHAR(255) NOT NULL,
    result VARCHAR(255) NOT NULL,
    score VARCHAR(255) NOT NULL
);


INSERT INTO matches(country, result, score) VALUES('New Zealand', 'Win', '20-10');
INSERT INTO matches(country, result, score) VALUES('Australia', 'Loss', '10-20');
INSERT INTO matches(country, result, score) VALUES('South Africa', 'Tie', '20-20');


