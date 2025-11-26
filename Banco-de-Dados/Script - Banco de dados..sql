CREATE DATABASE FishWeb;
USE FishWeb;
CREATE TABLE Usuario (
    idusuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(80),
    senha VARCHAR(45),
    CONSTRAINT uk_email UNIQUE (email) 
);

CREATE TABLE questionario (
    idquestionario INT AUTO_INCREMENT,
    vida_peixe INT,
    fkUsuario INT, 
    primary key(idquestionario, fkUsuario),
    CONSTRAINT fk_usuario_questionario FOREIGN KEY (fkUsuario)
        REFERENCES Usuario (idusuario)
);

select * from Usuario;
select * from Usuario join questionario on Usuario.idusuario = questionario.fkUsuario;
select * from questionario;

select max(vida_peixe) from questionario join Usuario on Usuario.idusuario = questionario.fkUsuario;
select count(fkUsuario) from questionario join Usuario on Usuario.idusuario = questionario.fkUsuario group by fkUsuario;

select count(fkUsuario) as partidas 
        from questionario join Usuario 
        on Usuario.idusuario = questionario.fkUsuario group by fkUsuario
        having fkUsuario = 1;
        
        select vida_peixe, idquestionario 
        from questionario 
        where fkUsuario = 1;
        
        
select max(vida_peixe) as MelhoresTentativas
from questionario 
where fkUsuario = 1;  
