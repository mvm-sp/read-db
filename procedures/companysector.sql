CREATE OR REPLACE FUNCTION prGetcompanysector(pid int)
RETURNS TABLE (id int4, dscompanysector varchar, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select id, dscompanysector, active, createdat, updatedat
	from companysector
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostcompanysector(pdscompanysector varchar)
RETURNS void AS $$
BEGIN	
	insert into companysector(dscompanysector) values (pdscompanysector);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutcompanysector(pId int4, pdscompanysector varchar, pactive bool)
RETURNS void AS $$
begin
	update companysector 
	set dscompanysector = pdscompanysector, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeletecompanysector(pid int)
RETURNS void AS $$
begin
	delete from companysector 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;