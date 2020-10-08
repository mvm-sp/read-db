CREATE OR REPLACE FUNCTION prGetexamprocedure(pid int)
RETURNS TABLE (id int4, dsexamprocedure varchar, idmodality int4, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select id, dsexamprocedure, idmodality, active, createdat, updatedat
	from examprocedure
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostexamprocedure(pdsexamprocedure varchar, pidmodality int4)
RETURNS void AS $$
BEGIN	
	insert into examprocedure(dsexamprocedure, idmodality) values (ppdsexamprocedure, idmodality);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutexamprocedure(pId int4, pdsexamprocedure varchar, pidmodality int4, pactive bool)
RETURNS void AS $$
begin
	update examprocedure 
	set dsexamprocedure = pdsexamprocedure, idmodality = pidmodality, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeleteexamprocedure(pid int)
RETURNS void AS $$
begin
	delete from examprocedure 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;