CREATE OR REPLACE FUNCTION prGetcompanyregion(pid int)
RETURNS TABLE (id int4, dscompanyregion varchar, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select id, dscompanyregion, active, createdat, updatedat
	from companyregion
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostcompanyregion(pdscompanyregion varchar)
RETURNS void AS $$
BEGIN	
	insert into companyregion(dscompanyregion) values (pdscompanyregion);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutcompanyregion(pId int4, pdscompanyregion varchar, pactive bool)
RETURNS void AS $$
begin
	update companyregion 
	set dscompanyregion = pdscompanyregion, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeletecompanyregion(pid int)
RETURNS void AS $$
begin
	delete from companyregion 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;