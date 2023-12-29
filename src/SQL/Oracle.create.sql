



CREATE TABLE "ТЧСоставаСпорт"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерСпортсмена" NUMBER(10) NULL,

	"Спортсмены" RAW(16) NOT NULL,

	"СоставКоманды" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧСоставаТренер"
(

	"primaryKey" RAW(16) NOT NULL,

	"Сотрудники" RAW(16) NOT NULL,

	"СоставКоманды" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Спортсмены"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"ДатаРождения" DATE NULL,

	"Телефон" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧГрафика"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаПроведения" DATE NULL,

	"Время" NVARCHAR2(255) NULL,

	"МестоПроведения" NVARCHAR2(255) NULL,

	"ГруппыВозраст" RAW(16) NOT NULL,

	"ГрафикМатчей" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ГруппыВозраст"
(

	"primaryKey" RAW(16) NOT NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Сотрудники"
(

	"primaryKey" RAW(16) NOT NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Должность" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ГрафикМатчей"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДатаСоздания" DATE NULL,

	"Сотрудники" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "СоставКоманды"
(

	"primaryKey" RAW(16) NOT NULL,

	"ИмяКоманды" NVARCHAR2(255) NULL,

	"Сотрудники" RAW(16) NOT NULL,

	"ГруппыВозраст" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "ТЧСоставаСпорт"
	ADD CONSTRAINT "ТЧСоставаСпо_6407" FOREIGN KEY ("Спортсмены") REFERENCES "Спортсмены" ("primaryKey");

CREATE INDEX "ТЧСоставаСпо_4212" on "ТЧСоставаСпорт" ("Спортсмены");

ALTER TABLE "ТЧСоставаСпорт"
	ADD CONSTRAINT "ТЧСоставаСпо_4171" FOREIGN KEY ("СоставКоманды") REFERENCES "СоставКоманды" ("primaryKey");

CREATE INDEX "ТЧСоставаСпо_8248" on "ТЧСоставаСпорт" ("СоставКоманды");

ALTER TABLE "ТЧСоставаТренер"
	ADD CONSTRAINT "ТЧСоставаТре_2460" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ТЧСоставаТрен_947" on "ТЧСоставаТренер" ("Сотрудники");

ALTER TABLE "ТЧСоставаТренер"
	ADD CONSTRAINT "ТЧСоставаТре_3775" FOREIGN KEY ("СоставКоманды") REFERENCES "СоставКоманды" ("primaryKey");

CREATE INDEX "ТЧСоставаТре_3012" on "ТЧСоставаТренер" ("СоставКоманды");

ALTER TABLE "ТЧГрафика"
	ADD CONSTRAINT "ТЧГрафика_FГр_4005" FOREIGN KEY ("ГруппыВозраст") REFERENCES "ГруппыВозраст" ("primaryKey");

CREATE INDEX "ТЧГрафика_IГр_7165" on "ТЧГрафика" ("ГруппыВозраст");

ALTER TABLE "ТЧГрафика"
	ADD CONSTRAINT "ТЧГрафика_FГр_4412" FOREIGN KEY ("ГрафикМатчей") REFERENCES "ГрафикМатчей" ("primaryKey");

CREATE INDEX "ТЧГрафика_IГр_3030" on "ТЧГрафика" ("ГрафикМатчей");

ALTER TABLE "ГрафикМатчей"
	ADD CONSTRAINT "ГрафикМатчей__6164" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ГрафикМатчей_I_999" on "ГрафикМатчей" ("Сотрудники");

ALTER TABLE "СоставКоманды"
	ADD CONSTRAINT "СоставКоманд_2714" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "СоставКоманд_8753" on "СоставКоманды" ("Сотрудники");

ALTER TABLE "СоставКоманды"
	ADD CONSTRAINT "СоставКоманд_5130" FOREIGN KEY ("ГруппыВозраст") REFERENCES "ГруппыВозраст" ("primaryKey");

CREATE INDEX "СоставКоманд_2026" on "СоставКоманды" ("ГруппыВозраст");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


