CREATE OR REPLACE FUNCTION prGetaccgroup(pid int)
RETURNS TABLE (id int4, dsgroup varchar, cdgroup varchar, rsgroup varchar, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select id, dsgroup, cdgroup, rsgroup, active, createdat, updatedat
	from accgroup
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostaccgroup(pdsgroup varchar, pcdgroup varchar, prsgroup varchar)
RETURNS void AS $$
BEGIN	
	insert into accgroup(dsgroup, cdgroup, rsgroup) values (pppdsgroup, cdgroup, rsgroup);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutaccgroup(pId int4, pdsgroup varchar, pcdgroup varchar, prsgroup varchar, pactive bool)
RETURNS void AS $$
begin
	update accgroup 
	set dsgroup = pdsgroup, cdgroup = pcdgroup, rsgroup = prsgroup, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeleteaccgroup(pid int)
RETURNS void AS $$
begin
	delete from accgroup 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;