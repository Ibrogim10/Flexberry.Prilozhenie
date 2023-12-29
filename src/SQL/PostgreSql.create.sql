




CREATE TABLE ТЧСоставаСпорт (
 primaryKey UUID NOT NULL,
 НомерСпортсмена INT NULL,
 Спортсмены UUID NOT NULL,
 СоставКоманды UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧСоставаТренер (
 primaryKey UUID NOT NULL,
 Сотрудники UUID NOT NULL,
 СоставКоманды UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Спортсмены (
 primaryKey UUID NOT NULL,
 ФИО VARCHAR(255) NULL,
 ДатаРождения TIMESTAMP(3) NULL,
 Телефон VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧГрафика (
 primaryKey UUID NOT NULL,
 ДатаПроведения TIMESTAMP(3) NULL,
 Время VARCHAR(255) NULL,
 МестоПроведения VARCHAR(255) NULL,
 ГруппыВозраст UUID NOT NULL,
 ГрафикМатчей UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ГруппыВозраст (
 primaryKey UUID NOT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Сотрудники (
 primaryKey UUID NOT NULL,
 ФИО VARCHAR(255) NULL,
 Должность VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ГрафикМатчей (
 primaryKey UUID NOT NULL,
 ДатаСоздания TIMESTAMP(3) NULL,
 Сотрудники UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СоставКоманды (
 primaryKey UUID NOT NULL,
 ИмяКоманды VARCHAR(255) NULL,
 Сотрудники UUID NOT NULL,
 ГруппыВозраст UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE ТЧСоставаСпорт ADD CONSTRAINT FK56e49a40bcaef9867749b1152ccc48ee387a4fa3 FOREIGN KEY (Спортсмены) REFERENCES Спортсмены; 
CREATE INDEX Index56e49a40bcaef9867749b1152ccc48ee387a4fa3 on ТЧСоставаСпорт (Спортсмены); 

 ALTER TABLE ТЧСоставаСпорт ADD CONSTRAINT FKc168ff8da8ae37ee2f7af0d4d6c530fa58b8d2b3 FOREIGN KEY (СоставКоманды) REFERENCES СоставКоманды; 
CREATE INDEX Indexc168ff8da8ae37ee2f7af0d4d6c530fa58b8d2b3 on ТЧСоставаСпорт (СоставКоманды); 

 ALTER TABLE ТЧСоставаТренер ADD CONSTRAINT FK6500ec752a4871327c8d112fcf1e12e6e2ec3c64 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index6500ec752a4871327c8d112fcf1e12e6e2ec3c64 on ТЧСоставаТренер (Сотрудники); 

 ALTER TABLE ТЧСоставаТренер ADD CONSTRAINT FK85851221cda82a064abaa5802dcdbcbd9f3294f0 FOREIGN KEY (СоставКоманды) REFERENCES СоставКоманды; 
CREATE INDEX Index85851221cda82a064abaa5802dcdbcbd9f3294f0 on ТЧСоставаТренер (СоставКоманды); 

 ALTER TABLE ТЧГрафика ADD CONSTRAINT FKb90bfede498e67f4fe0974146f1aa660adb2263b FOREIGN KEY (ГруппыВозраст) REFERENCES ГруппыВозраст; 
CREATE INDEX Indexb90bfede498e67f4fe0974146f1aa660adb2263b on ТЧГрафика (ГруппыВозраст); 

 ALTER TABLE ТЧГрафика ADD CONSTRAINT FK4b3b7f91b80744e3b6c9a3a947e1d9587d652758 FOREIGN KEY (ГрафикМатчей) REFERENCES ГрафикМатчей; 
CREATE INDEX Index4b3b7f91b80744e3b6c9a3a947e1d9587d652758 on ТЧГрафика (ГрафикМатчей); 

 ALTER TABLE ГрафикМатчей ADD CONSTRAINT FKae1ce6e0d501d80b4b8e6a4ab84d801c5b2fb8ac FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Indexae1ce6e0d501d80b4b8e6a4ab84d801c5b2fb8ac on ГрафикМатчей (Сотрудники); 

 ALTER TABLE СоставКоманды ADD CONSTRAINT FK135a5c0100809cb781bd3b1825a37b7eb3464a7f FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index135a5c0100809cb781bd3b1825a37b7eb3464a7f on СоставКоманды (Сотрудники); 

 ALTER TABLE СоставКоманды ADD CONSTRAINT FK3636a15e32d98e7e156f5330e920191d768ebfdd FOREIGN KEY (ГруппыВозраст) REFERENCES ГруппыВозраст; 
CREATE INDEX Index3636a15e32d98e7e156f5330e920191d768ebfdd on СоставКоманды (ГруппыВозраст); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

