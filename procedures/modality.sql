CREATE OR REPLACE FUNCTION prGetmodality(pid int)
RETURNS TABLE (id int4, dsmodality varchar, dsacronym varchar, nrorder int4, active bool, createdat timestamptz, updatedat timestamptz) AS $$
	select id, dsmodality, dsacronym, nrorder, active, createdat, updatedat
	from modality
	where (id = pid or pid is null);
$$ LANGUAGE SQL;

CREATE OR REPLACE FUNCTION prPostmodality(pdsmodality varchar, pdsacronym varchar, pnrorder int4)
RETURNS void AS $$
BEGIN	
	insert into modality(dsmodality, dsacronym, nrorder) values (pppdsmodality, dsacronym, nrorder);
END; $$ 
LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION prPutmodality(pId int4, pdsmodality varchar, pdsacronym varchar, pnrorder int4, pactive bool)
RETURNS void AS $$
begin
	update modality 
	set dsmodality = pdsmodality, dsacronym = pdsacronym, nrorder = pnrorder, active = pactive , updatedat = now()
	where id = pid;
END; $$ 
LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION prDeletemodality(pid int)
RETURNS void AS $$
begin
	delete from modality 
	where id = pid;
END; $$ 
LANGUAGE plpgsql;