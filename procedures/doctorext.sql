CREATE OR REPLACE FUNCTION prGetdoctorext(pid int)
RETURNS TABLE (id int4, nmdoctorext varchar, crmdoctorext int8, idclient int4, ismed bool, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select id, nmdoctorext, crmdoctorext, idclient, ismed, active, createdat, updatedat
	from doctorext
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostdoctorext(pnmdoctorext varchar, pcrmdoctorext int8, pidclient int4, pismed bool)
RETURNS void AS $$
BEGIN	
	insert into doctorext(nmdoctorext, crmdoctorext, idclient, ismed) values (ppppnmdoctorext, crmdoctorext, idclient, ismed);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutdoctorext(pId int4, pnmdoctorext varchar, pcrmdoctorext int8, pidclient int4, pismed bool, pactive bool)
RETURNS void AS $$
begin
	update doctorext 
	set nmdoctorext = pnmdoctorext, crmdoctorext = pcrmdoctorext, idclient = pidclient, ismed = pismed, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeletedoctorext(pid int)
RETURNS void AS $$
begin
	delete from doctorext 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;