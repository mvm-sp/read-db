CREATE OR REPLACE FUNCTION prGetagreementext(pid int)
RETURNS TABLE (id int4, dsagreementext varchar, idclient int4, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select id, dsagreementext, idclient, active, createdat, updatedat
	from agreementext
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostagreementext(pdsagreementext varchar, pidclient int4)
RETURNS void AS $$
BEGIN	
	insert into agreementext(dsagreementext, idclient) values (ppdsagreementext, idclient);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutagreementext(pId int4, pdsagreementext varchar, pidclient int4, pactive bool)
RETURNS void AS $$
begin
	update agreementext 
	set dsagreementext = pdsagreementext, idclient = pidclient, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeleteagreementext(pid int)
RETURNS void AS $$
begin
	delete from agreementext 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;