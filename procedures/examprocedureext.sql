CREATE OR REPLACE FUNCTION prGetexamprocedureext(pid int)
RETURNS TABLE (id int4, code varchar, dsexamprocedureext varchar, idmodalityext int4, idclient int4, isproced bool, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select id, code, dsexamprocedureext, idmodalityext, idclient, isproced, active, createdat, updatedat
	from examprocedureext
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostexamprocedureext(pcode varchar, pdsexamprocedureext varchar, pidmodalityext int4, pidclient int4, pisproced bool)
RETURNS void AS $$
BEGIN	
	insert into examprocedureext(code, dsexamprocedureext, idmodalityext, idclient, isproced) values (pppppcode, dsexamprocedureext, idmodalityext, idclient, isproced);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutexamprocedureext(pId int4, pcode varchar, pdsexamprocedureext varchar, pidmodalityext int4, pidclient int4, pisproced bool, pactive bool)
RETURNS void AS $$
begin
	update examprocedureext 
	set code = pcode, dsexamprocedureext = pdsexamprocedureext, idmodalityext = pidmodalityext, idclient = pidclient, isproced = pisproced, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeleteexamprocedureext(pid int)
RETURNS void AS $$
begin
	delete from examprocedureext 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;