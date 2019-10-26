CREATE DATABASE dsfinalproject;
USE dsfinalproject;

CREATE TABLE member (
    memberID int PRIMARY KEY NOT NULL AUTO_INCREMENT,
    firstName VARCHAR(64) NOT NULL ,
    lastName VARCHAR(64) NOT NULL,
    dob DATE DEFAULT NULL,
    gender CHAR(1) DEFAULT '' NOT NULL,
    radioNumber VARCHAR(64) NOT NULL,
    stationNumber INTEGER NOT NULL,
    email VARCHAR(64) NOT NULL,
    position VARCHAR(64) NOT NULL,
    phoneNumber VARCHAR(64) NOT NULL,
    address VARCHAR(64) NOT NULL,
    startDate DATE NOT NULL,
    isActive boolean NOT NULL default 1
);
select * from member;
drop table member;

INSERT INTO member ( firstName, lastName, dob, gender, radioNumber, stationNumber, email, position,phoneNumber, address, startDate, isActive) VALUES
( 'Sylvia', 'Hernandez', '2012-09-01',  'F', 'A-1', 1, 'sher@gmail.com', 'Chief', '312-344-4322','2093 S webster st Bloomington,Indiana', '2019-02-01');

CREATE TABLE certification (
    certificationID INT PRIMARY KEY AUTO_INCREMENT,
    certification_name VARCHAR(64),
    certification_agency VARCHAR(64),
    exp_period INTEGER DEFAULT NULL
    );

INSERT INTO certification (certification_name, certification_agency, exp_period) VALUES
("CPR for Healthcare Providers", "American Heart Association", 2),
("Firefighter I", "Athens Technical College", 2)
;

CREATE TABLE receive (
    enrollmentID INT PRIMARY KEY AUTO_INCREMENT,
    memberID INT,
    certificationID INT,
    certificateIsActive boolean NOT NULL default 1,
    certificateStartDate DATE DEFAULT NULL,
    certificateEndDate DATE DEFAULT NULL,
    constraint receive_fk FOREIGN KEY (memberID) references member (memberID),
    constraint receive1_fk FOREIGN KEY (certificationID) references certification (certificationID)
);

INSERT INTO receive ( memberID, certificationID, certificateStartDate, certificateEndDate) VALUES (1,1, '2019-10-05', '2021-10-04');
