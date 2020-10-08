CREATE OR REPLACE FUNCTION prGetclient(pid int)
RETURNS TABLE (id int4, nmclient varchar, idcompanyregion int4, idcompanysize int4, idcompanysector int4, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select id, nmclient, idcompanyregion, idcompanysize, idcompanysector, active, createdat, updatedat
	from client
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostclient(pnmclient varchar, pidcompanyregion int4, pidcompanysize int4, pidcompanysector int4)
RETURNS void AS $$
BEGIN	
	insert into client(nmclient, idcompanyregion, idcompanysize, idcompanysector) values (ppppnmclient, idcompanyregion, idcompanysize, idcompanysector);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutclient(pId int4, pnmclient varchar, pidcompanyregion int4, pidcompanysize int4, pidcompanysector int4, pactive bool)
RETURNS void AS $$
begin
	update client 
	set nmclient = pnmclient, idcompanyregion = pidcompanyregion, idcompanysize = pidcompanysize, idcompanysector = pidcompanysector, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeleteclient(pid int)
RETURNS void AS $$
begin
	delete from client 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;