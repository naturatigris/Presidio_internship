FROM mcr.microsoft.com/dotnet/aspnet:9.0-preview AS base 

WORKDIR /app 

EXPOSE 80 

 

FROM mcr.microsoft.com/dotnet/sdk:9.0-preview AS build 

WORKDIR /src 

COPY . . 

RUN dotnet publish -c Release -o /app/publish 

 

FROM base AS final 

WORKDIR /app 

COPY --from=build /app/publish . 

ENTRYPOINT ["dotnet", "MyApiApp.dll"] 


