// A hierarchy of all data fields
fieldHierarchy = [
  {
    field: "INFORM COVID-19 RISK",
    subset: ["VULNERABILITY", "Covid-19 Hazard & Exposure", "LACK OF COPING CAPACITY"]
  },
  {
    field: "VULNERABILITY",
    subset: ["VULNERABILITY (Hazard-independent)", "COVID-19 VULNERABILITY"]
  },
    {
    field: "VULNERABILITY (Hazard-independent)",
    subset: ["Socio-Economic Vulnerability", "Vulnerable Groups"]
  },
  {
    field: "Socio-Economic Vulnerability",
    subset: ["Economic Dependency Index", "Inequality", "Development & Deprivation"]
  },
  {
    field: "Economic Dependency Index",
    subset: ["Public Aid per capita (US$)", "Net ODA received (% of GNI)", "Volume of remittances"]
  },
  {
    field: "Public Aid per capita (US$)",
    subset: ["Public Aid per capita (US$)"]
  },
  {
    field: "Net ODA received (% of GNI)",
    subset: ["Net ODA received (% of GNI)"]
  },
  {
    field: "Volume of remittances",
    subset: ["Volume of remittances"]
  },
  {
    field: "Inequality",
    subset: ["Gender Inequality Index", "Gini Index"]
  },
    {
    field: "Gender Inequality Index",
    subset: ["Gender Inequality Index"]
  },
    {
    field: "Gini Index",
    subset: ["Gini Index"]
  },
  {
    field: "Development & Deprivation",
    subset: ["Human Development Index", "Multidimensional Poverty Index"]
  },
  {
    field: "Human Development Index",
    subset: ["Human Development Index"]
  },
  {
    field: "Multidimensional Poverty Index",
    subset: ["Multidimensional Poverty Index"]
  },
  {
    field: "Vulnerable Groups",
    subset: ["Uprooted people", "Health Conditions", "GBV", "Food Security"]
  },
  {
    field: "Uprooted people",
    subset: ["Uprooted people (total population)", "Total Uprooted people (percentage of the total population)"]
  },
  {
    field: "Uprooted people (total population)",
    subset: ["Uprooted people (total population)"]
  },
  {
    field: "Total Uprooted people (percentage of the total population)",
    subset: ["Total Uprooted people (percentage of the total population)"]
  },
  {
    field: "Health Conditions",
    subset: ["HIV", "Incidence of Tuberculosis", "Malaria incidence per 1,000 population at risk","People requiring interventions against neglected tropical diseases"]
  },
 {
    field: "HIV",
    subset: ["Estimated number of people living with HIV - Adult (>15) rate", "Number of new HIV infections per 1,000 uninfected population"]
  },
  {
    field: "Estimated number of people living with HIV - Adult (>15) rate",
    subset: ["Estimated number of people living with HIV - Adult (>15) rate"]
  },
    {
    field: "Number of new HIV infections per 1,000 uninfected population",
    subset: ["Number of new HIV infections per 1,000 uninfected population"]
  },
    {
    field: "Incidence of Tuberculosis",
    subset: ["Incidence of Tuberculosis"]
  },
      {
    field: "Malaria incidence per 1,000 population at risk",
    subset: ["Malaria incidence per 1,000 population at risk"]
  },
  {
    field: "People requiring interventions against neglected tropical diseases",
    subset: ["People requiring interventions against neglected tropical diseases"]
  },
  {
    field: "Food Security",
    subset: ["Food Availability Score", "Food Utilization Score"]
  },
    {
    field: "Food Availability Score",
    subset: ["Food Availability Score"]
  },
  {
    field: "Food Utilization Score",
    subset: ["Food Utilization Score"]
  },
  {
    field: "GBV",
    subset: ["Proportion of ever-partnered women and girls subjected to physical and/or sexual violence", "Attitudes towards violence"]
  },
    {
    field: "Proportion of ever-partnered women and girls subjected to physical and/or sexual violence",
    subset: ["Proportion of ever-partnered women and girls subjected to physical and/or sexual violence"]
  },
  {
    field: "Attitudes towards violence",
    subset: ["Attitudes towards violence"]
  },
  {
    field: "COVID-19 VULNERABILITY",
    subset: ["Movements", "Behaviour", "Demographic and Co-morbidities"]
  },
    {
    field: "Movements",
    subset: ["International movements", "Internal movements"]
  },
    {
    field: "International movements",
    subset: ["Air transport(passengers carried)", "International tourism(number of arrivals)", "Point of entry"]
  },
    {
    field: "Air transport(passengers carried)",
    subset: ["Air transport(passengers carried)"]
  },
  {
    field: "International tourism(number of arrivals)",
    subset: ["International tourism(number of arrivals)"]
  },
   {
    field: "Point of entry",
    subset: ["Point of entry"]
  },
    {
    field: "Internal movements",
    subset: ["Access to Cities","Road density"]
  },
  {
    field: "Access to Cities",
    subset: ["Access to Cities"]
  },
  {
    field: "Behaviour",
    subset: ["Awareness", "Trust"]
  },
   {
    field: "Awareness",
    subset: ["Adult literacy rate","Mobile cellular subscriptions", "Internet users"]
  },
     {
    field: "Adult literacy rate",
    subset: ["Adult literacy rate"]
  },
     {
    field: "Mobile cellular subscriptions",
    subset: ["Mobile cellular subscriptions"]
  },
     {
    field: "Internet users",
    subset: ["Internet users"]
  },
        {
    field: "Trust",
    subset: ["Trust"]
  },
  {
    field: "Demographic and Co-morbidities",
    subset: ["Demographic and Co-morbidities"]
  },
  ////////////////////////////////////////////////////////////////////////////
  {
    field: "LACK OF COPING CAPACITY",
    subset: ["LACK OF COPING CAPACITY (Hazard-independent)", "COVID-19 LACK OF COPING CAPACITY"]
  },
  {
    field: "LACK OF COPING CAPACITY (Hazard-independent)",
    subset: ["Institutional", "Infrastructure"]
  },
  {
    field: "Institutional",
    subset: ["Governance"]
  },
  {
    field: "Governance",
    subset: ["Corruption Perception Index", "Government Effectiveness"]
  },
  {
    field: "Corruption Perception Index",
    subset: ["Corruption Perception Index"]
  },
    {
    field: "Government Effectiveness",
    subset: ["Government Effectiveness"]
  },
  {
    field: "Infrastructure",
    subset: ["Access to health care"]
  },
  {
    field: "Access to health care",
    subset: ["Per capita public and private expenditure on health care", "Immunization coverage", "Health system capacity", "Maternal Mortality Ratio"]
  },
    {
    field: "Per capita public and private expenditure on health care",
    subset: ["Per capita public and private expenditure on health care"]
  },
  {
    field: "Immunization coverage",
    subset: ["Coverage of DTP3 vaccine", "Coverage of measles-containing vaccine", "Coverage of pneumococcal conjugate vaccine"]
  },
   {
    field: "Coverage of DTP3 vaccine",
    subset: ["Coverage of DTP3 vaccine"]
  },
  {
    field: "Coverage of measles-containing vaccine",
    subset: ["Coverage of measles-containing vaccine"]
  },
  {
    field: "Coverage of pneumococcal conjugate vaccine",
    subset: ["Coverage of pneumococcal conjugate vaccine"]
  },
  {
    field: "Health system capacity",
    subset: ["Physicians Density", "Hospital bed"]
  },
    {
    field: "Physicians Density",
    subset: ["Physicians Density"]
  },
  {
    field: "Hospital bed",
    subset: ["Hospital bed"]
  },
  {
    field: "Maternal Mortality Ratio",
    subset: ["Maternal Mortality Ratio"]
  },
    {
    field: "COVID-19 LACK OF COPING CAPACITY",
    subset: ["IHR", "Operational readiness index"]
  },
  ////////////////////////////////////////////////////////////////////////////////////////////////
  {
    field: "Covid-19 Hazard & Exposure",
   subset: ["WaSH", "Population"]
  },
  {
    field: "WaSH",
    subset: ["Sanitation", "Drinking water", "Hygiene"]
  },
  {
    field: "Sanitation",
    subset: ["Sanitation"]
  },
  {
    field: "Drinking water",
    subset: ["Drinking water"]
  },
  {
    field: "Hygiene",
    subset: ["Hygiene"]
  },
  {
    field: "Population",
    subset: ["Population density", "Urban population growth", "Population living in urban areas", "Population living in slums (% of urban population)", "Household size"]
  },
  {
    field: "Population density",
    subset: ["Population density"]
  },
    {
    field: "Urban population growth",
    subset: ["Urban population growth"]
  },
    {
    field: "Population living in urban areas",
    subset: ["Population living in urban areas"]
  },
    {
    field: "Population living in slums (% of urban population)",
    subset: ["Population living in slums (% of urban population)"]
  },
    {
    field: "Household size",
    subset: ["Household size"]
  },

 
];
