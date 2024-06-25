import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ErrorMessage from "../components/Resume/ErrorMessage";

const Resume = () => {
  const { search, pathname } = useLocation();
  const navigation = useNavigate();
  const searchQueryParams = new URLSearchParams(search);
  const experiencesCalculate =
    Number(new Date()) - Number(new Date("2024-01-01"));
  const experienceYears = Math.floor(experiencesCalculate / 31536000000);
  const experienceMonths = Math.floor(
    (experiencesCalculate % 31536000000) / 2628000000
  );
  const experienceDays = Math.floor(
    ((experiencesCalculate % 31536000000) % 2628000000) / 86400000
  );
  const experiences = `${experienceYears}y-${experienceMonths}m-${experienceDays}d`;
  const searchQueryParamsType = String(searchQueryParams.get("type"))
    .trim()
    .toLocaleLowerCase();
  const searchQueryParamsMode = String(searchQueryParams.get("mode"))
    .trim()
    .toLocaleLowerCase();
  const searchQueryParamsExperiences = String(
    searchQueryParams.get("experiences")
  )
    .trim()
    .toLocaleLowerCase();
  useEffect(() => {
    if (search === "") {
      navigation(`${pathname}?type=resume&mode=on&experiences=${experiences}`);
    }
  }, [search]);
  return (
    <>
      {searchQueryParamsType === "resume" &&
      searchQueryParamsMode === "on" &&
      searchQueryParamsExperiences === experiences ? (
        <div className="w-full h-[85vh]">
          <embed
            src="/assets/images/pdf/Vikash_Kumar_Resume.pdf"
            className="w-full h-full rounded-[5px]"
            type="application/pdf"
          />
        </div>
      ) : searchQueryParamsType !== "resume" &&
        searchQueryParamsMode === "on" &&
        searchQueryParamsExperiences === experiences ? (
        <ErrorMessage
          aboveMessage="Type query parameter is invalid."
          bellowMessage=" Please update the type query parameter to resume."
        />
      ) : searchQueryParamsType === "resume" &&
        searchQueryParamsMode === "off" &&
        searchQueryParamsExperiences === experiences ? (
        <ErrorMessage
          aboveMessage="Mode query parameter is set to off."
          bellowMessage="Please update the mode query parameter to on."
        />
      ) : (
        <ErrorMessage
          aboveMessage="Invalid query parameter values."
          bellowMessage=" Please update the query parameters."
        />
      )}
    </>
  );
};

export default Resume;
