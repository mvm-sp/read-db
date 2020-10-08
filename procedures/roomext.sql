CREATE OR REPLACE FUNCTION prGetroomext(pid int)
RETURNS TABLE (id int4, dsroomext varchar, dshardware varchar, idclient int4, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select id, dsroomext, dshardware, idclient, active, createdat, updatedat
	from roomext
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostroomext(pdsroomext varchar, pdshardware varchar, pidclient int4)
RETURNS void AS $$
BEGIN	
	insert into roomext(dsroomext, dshardware, idclient) values (pppdsroomext, dshardware, idclient);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutroomext(pId int4, pdsroomext varchar, pdshardware varchar, pidclient int4, pactive bool)
RETURNS void AS $$
begin
	update roomext 
	set dsroomext = pdsroomext, dshardware = pdshardware, idclient = pidclient, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeleteroomext(pid int)
RETURNS void AS $$
begin
	delete from roomext 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;