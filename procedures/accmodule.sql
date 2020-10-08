CREATE OR REPLACE FUNCTION prGetaccmodule(pid int)
RETURNS TABLE (id int4, dsmodule varchar, dspath varchar, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select id, dsmodule, dspath, active, createdat, updatedat
	from accmodule
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostaccmodule(pdsmodule varchar, pdspath varchar)
RETURNS void AS $$
BEGIN	
	insert into accmodule(dsmodule, dspath) values (ppdsmodule, dspath);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutaccmodule(pId int4, pdsmodule varchar, pdspath varchar, pactive bool)
RETURNS void AS $$
begin
	update accmodule 
	set dsmodule = pdsmodule, dspath = pdspath, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeleteaccmodule(pid int)
RETURNS void AS $$
begin
	delete from accmodule 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;