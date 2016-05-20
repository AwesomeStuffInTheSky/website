package com.asits.website.dw.app;


import io.dropwizard.Application;
import io.dropwizard.Configuration;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;


public final class WebsiteApplication extends Application<Configuration> {


	public static void main( String[] args ) throws Exception {
		new WebsiteApplication().run( args );
	}


	@Override
	public void initialize( Bootstrap<Configuration> bootstrap ) {
		bootstrap.addBundle( new AssetsBundle( "/css", "/css", null, "css" ) );
		bootstrap.addBundle( new AssetsBundle( "/images", "/image", null, "images" ) );
		bootstrap.addBundle( new AssetsBundle( "/js", "/js", null, "js" ) );
		bootstrap.addBundle( new AssetsBundle( "/html", "/", "index.html", "html" ) );
	}


	@Override
	public void run( Configuration configuration, Environment environment ) throws Exception {
		// Nothing for now
	}

}
