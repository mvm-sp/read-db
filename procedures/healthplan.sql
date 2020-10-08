CREATE OR REPLACE FUNCTION prGethealthplan(pid int)
RETURNS TABLE (id int4, dshealthplan varchar, idagreement int4, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select id, dshealthplan, idagreement, active, createdat, updatedat
	from healthplan
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPosthealthplan(pdshealthplan varchar, pidagreement int4)
RETURNS void AS $$
BEGIN	
	insert into healthplan(dshealthplan, idagreement) values (ppdshealthplan, idagreement);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPuthealthplan(pId int4, pdshealthplan varchar, pidagreement int4, pactive bool)
RETURNS void AS $$
begin
	update healthplan 
	set dshealthplan = pdshealthplan, idagreement = pidagreement, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeletehealthplan(pid int)
RETURNS void AS $$
begin
	delete from healthplan 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;