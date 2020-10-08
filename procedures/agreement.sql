CREATE OR REPLACE FUNCTION prGetagreement(pid int)
RETURNS TABLE (id int4, dsagreement varchar, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select id, dsagreement, active, createdat, updatedat
	from agreement
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostagreement(pdsagreement varchar)
RETURNS void AS $$
BEGIN	
	insert into agreement(dsagreement) values (pdsagreement);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutagreement(pId int4, pdsagreement varchar, pactive bool)
RETURNS void AS $$
begin
	update agreement 
	set dsagreement = pdsagreement, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeleteagreement(pid int)
RETURNS void AS $$
begin
	delete from agreement 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;