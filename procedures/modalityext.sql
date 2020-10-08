CREATE OR REPLACE FUNCTION prGetmodalityext(pid int)
RETURNS TABLE (id int4, dsmodalityext varchar, idclient int4, idmodality int4, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select id, dsmodalityext, idclient, idmodality, active, createdat, updatedat
	from modalityext
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostmodalityext(pdsmodalityext varchar, pidclient int4, pidmodality int4)
RETURNS void AS $$
BEGIN	
	insert into modalityext(dsmodalityext, idclient, idmodality) values (pppdsmodalityext, idclient, idmodality);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutmodalityext(pId int4, pdsmodalityext varchar, pidclient int4, pidmodality int4, pactive bool)
RETURNS void AS $$
begin
	update modalityext 
	set dsmodalityext = pdsmodalityext, idclient = pidclient, idmodality = pidmodality, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeletemodalityext(pid int)
RETURNS void AS $$
begin
	delete from modalityext 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;