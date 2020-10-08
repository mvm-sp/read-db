CREATE OR REPLACE FUNCTION prGethealthplanext(pid int)
RETURNS TABLE (id int4, dshealthplanext varchar, idagreementext int4, idclient int4, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select id, dshealthplanext, idagreementext, idclient, active, createdat, updatedat
	from healthplanext
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPosthealthplanext(pdshealthplanext varchar, pidagreementext int4, pidclient int4)
RETURNS void AS $$
BEGIN	
	insert into healthplanext(dshealthplanext, idagreementext, idclient) values (pppdshealthplanext, idagreementext, idclient);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPuthealthplanext(pId int4, pdshealthplanext varchar, pidagreementext int4, pidclient int4, pactive bool)
RETURNS void AS $$
begin
	update healthplanext 
	set dshealthplanext = pdshealthplanext, idagreementext = pidagreementext, idclient = pidclient, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeletehealthplanext(pid int)
RETURNS void AS $$
begin
	delete from healthplanext 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;