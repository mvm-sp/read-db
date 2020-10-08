CREATE OR REPLACE FUNCTION prGetcompanysize(pid int)
RETURNS TABLE (id int4, dscompanysize varchar, vlrangeinit float8, vlrangefinal float8, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select id, dscompanysize, vlrangeinit, vlrangefinal, active, createdat, updatedat
	from companysize
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostcompanysize(pdscompanysize varchar, pvlrangeinit float8, pvlrangefinal float8)
RETURNS void AS $$
BEGIN	
	insert into companysize(dscompanysize, vlrangeinit, vlrangefinal) values (pppdscompanysize, vlrangeinit, vlrangefinal);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutcompanysize(pId int4, pdscompanysize varchar, pvlrangeinit float8, pvlrangefinal float8, pactive bool)
RETURNS void AS $$
begin
	update companysize 
	set dscompanysize = pdscompanysize, vlrangeinit = pvlrangeinit, vlrangefinal = pvlrangefinal, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeletecompanysize(pid int)
RETURNS void AS $$
begin
	delete from companysize 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;