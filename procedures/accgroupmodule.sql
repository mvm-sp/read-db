CREATE OR REPLACE FUNCTION prGetaccgroupmodule(pid int)
RETURNS TABLE (idgroup int4, idmodule int4, cdlevel int4, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select idgroup, idmodule, cdlevel, active, createdat, updatedat
	from accgroupmodule
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostaccgroupmodule(pidgroup int4, pidmodule int4, pcdlevel int4)
RETURNS void AS $$
BEGIN	
	insert into accgroupmodule(idgroup, idmodule, cdlevel) values (pppidgroup, idmodule, cdlevel);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutaccgroupmodule(pId int4, pidgroup int4, pidmodule int4, pcdlevel int4, pactive bool)
RETURNS void AS $$
begin
	update accgroupmodule 
	set idgroup = pidgroup, idmodule = pidmodule, cdlevel = pcdlevel, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeleteaccgroupmodule(pid int)
RETURNS void AS $$
begin
	delete from accgroupmodule 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;