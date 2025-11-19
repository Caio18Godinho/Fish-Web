create database FishWeb;
use FishWeb;

create table Usuario(
idusuario int primary key auto_increment,
nome varchar(45),
email varchar(80),
senha varchar(45));

create table questionario (
idquestionario int primary key auto_increment,
questionarios_feitos int,
vida_peixe float,
fkUsuario int, 
constraint chkusuario 
foreign key (fkUsuario) 
references Usuario(idusuario));