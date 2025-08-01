﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;
using Organization.Contexts;

#nullable disable

namespace task3.Migrations
{
    [DbContext(typeof(OrganizationContext))]
    [Migration("20250605133830_hrtablerename")]
    partial class hrtablerename
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("Organization.Models.Employee", b =>
                {
                    b.Property<string>("Email")
                        .HasColumnType("text");

                    b.Property<string>("Department")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("EmployeeType")
                        .IsRequired()
                        .HasMaxLength(8)
                        .HasColumnType("character varying(8)");

                    b.Property<byte[]>("HashKey")
                        .HasColumnType("bytea");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnType("bytea");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Email");

                    b.ToTable("Employees");

                    b.HasDiscriminator<string>("EmployeeType").HasValue("Employee");

                    b.UseTphMappingStrategy();
                });

            modelBuilder.Entity("Organization.Models.Specialization", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("ITEmployeeEmail")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("text");

                    b.HasKey("Id");

                    b.HasIndex("ITEmployeeEmail");

                    b.ToTable("Specializations");
                });

            modelBuilder.Entity("Organization.Models.UploadedFile", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid");

                    b.Property<string>("ContentType")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<byte[]>("Data")
                        .IsRequired()
                        .HasColumnType("bytea");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<string>("FileName")
                        .IsRequired()
                        .HasColumnType("text");

                    b.Property<DateTime>("UploadedAt")
                        .HasColumnType("timestamp with time zone");

                    b.HasKey("Id");

                    b.HasIndex("Email");

                    b.ToTable("UploadedFiles");
                });

            modelBuilder.Entity("Organization.Models.HREmployee", b =>
                {
                    b.HasBaseType("Organization.Models.Employee");

                    b.HasDiscriminator().HasValue("HR");
                });

            modelBuilder.Entity("Organization.Models.ITEmployee", b =>
                {
                    b.HasBaseType("Organization.Models.Employee");

                    b.HasDiscriminator().HasValue("IT");
                });

            modelBuilder.Entity("Organization.Models.Specialization", b =>
                {
                    b.HasOne("Organization.Models.ITEmployee", "ITEmployee")
                        .WithMany("Specializations")
                        .HasForeignKey("ITEmployeeEmail")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("ITEmployee");
                });

            modelBuilder.Entity("Organization.Models.UploadedFile", b =>
                {
                    b.HasOne("Organization.Models.HREmployee", "HREmployee")
                        .WithMany("UploadedFiles")
                        .HasForeignKey("Email")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("HREmployee");
                });

            modelBuilder.Entity("Organization.Models.HREmployee", b =>
                {
                    b.Navigation("UploadedFiles");
                });

            modelBuilder.Entity("Organization.Models.ITEmployee", b =>
                {
                    b.Navigation("Specializations");
                });
#pragma warning restore 612, 618
        }
    }
}
