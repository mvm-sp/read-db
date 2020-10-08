CREATE OR REPLACE FUNCTION prGetaccusergroup(pid int)
RETURNS TABLE (iduser int4, idgroup int4, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select iduser, idgroup, active, createdat, updatedat
	from accusergroup
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostaccusergroup(piduser int4, pidgroup int4)
RETURNS void AS $$
BEGIN	
	insert into accusergroup(iduser, idgroup) values (ppiduser, idgroup);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutaccusergroup(pId int4, piduser int4, pidgroup int4, pactive bool)
RETURNS void AS $$
begin
	update accusergroup 
	set iduser = piduser, idgroup = pidgroup, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeleteaccusergroup(pid int)
RETURNS void AS $$
begin
	delete from accusergroup 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;